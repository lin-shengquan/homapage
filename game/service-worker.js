// Service Worker - 后台金币计算
const CACHE_NAME = 'card-game-v1';
const MAX_OFFLINE_SECONDS = 8 * 60 * 60; // 最多8小时离线收益

// 监听安装事件
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './styles.css',
                './script.js'
            ]);
        })
    );
    self.skipWaiting();
});

// 监听激活事件
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// 监听消息事件 - 从页面接收数据
self.addEventListener('message', (event) => {
    if (event.data.type === 'SYNC_GOLD') {
        // 存储金币数据供后台计算
        self.goldData = event.data.payload;
    }
});

// 监听定时事件（需要用户交互后才能使用）
let goldInterval = null;

function startBackgroundGoldProduction() {
    if (goldInterval) return;
    
    goldInterval = setInterval(() => {
        if (self.goldData) {
            // 后台每秒增加金币
            self.goldData.gold += self.goldData.goldPerSecond;
            self.goldData.lastUpdateTime = Date.now();
            
            // 发送消息给所有客户端
            self.clients.matchAll().then((clients) => {
                clients.forEach((client) => {
                    client.postMessage({
                        type: 'GOLD_UPDATE',
                        payload: self.goldData
                    });
                });
            });
        }
    }, 1000);
}

// 监听客户端连接
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
    
    // 当有客户端连接时启动后台计算
    if (!goldInterval) {
        startBackgroundGoldProduction();
    }
});

// 监听后台同步事件（需要用户授权）
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-gold') {
        event.waitUntil(syncGoldData());
    }
});

// 同步金币数据到客户端
function syncGoldData() {
    return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
            if (self.goldData) {
                client.postMessage({
                    type: 'GOLD_SYNC',
                    payload: self.goldData
                });
            }
        });
    });
}