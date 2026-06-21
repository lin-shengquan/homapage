// 卡牌数据配置
const CARD_DATA = {
    // 火系卡牌
    fire: [
        { id: 'fire_1', name: '小火苗', emoji: '🔥', rarity: 'common', level: 1 },
        { id: 'fire_2', name: '火焰精灵', emoji: '👹', rarity: 'uncommon', level: 2 },
        { id: 'fire_3', name: '炎龙', emoji: '🐉', rarity: 'rare', level: 3 },
        { id: 'fire_4', name: '火焰领主', emoji: '👑', rarity: 'epic', level: 4 },
        { id: 'fire_5', name: '炎神', emoji: '☀️', rarity: 'legendary', level: 5 },
    ],
    // 水系卡牌
    water: [
        { id: 'water_1', name: '水滴', emoji: '💧', rarity: 'common', level: 1 },
        { id: 'water_2', name: '水母', emoji: '🎐', rarity: 'uncommon', level: 2 },
        { id: 'water_3', name: '海豚', emoji: '🐬', rarity: 'rare', level: 3 },
        { id: 'water_4', name: '海龙', emoji: '🐲', rarity: 'epic', level: 4 },
        { id: 'water_5', name: '海神', emoji: '🌊', rarity: 'legendary', level: 5 },
    ],
    // 土系卡牌
    earth: [
        { id: 'earth_1', name: '石头', emoji: '🪨', rarity: 'common', level: 1 },
        { id: 'earth_2', name: '石像', emoji: '🗿', rarity: 'uncommon', level: 2 },
        { id: 'earth_3', name: '岩石巨人', emoji: '👺', rarity: 'rare', level: 3 },
        { id: 'earth_4', name: '泰坦', emoji: '⛰️', rarity: 'epic', level: 4 },
        { id: 'earth_5', name: '大地之母', emoji: '🌍', rarity: 'legendary', level: 5 },
    ],
    // 风系卡牌
    wind: [
        { id: 'wind_1', name: '微风', emoji: '💨', rarity: 'common', level: 1 },
        { id: 'wind_2', name: '风精灵', emoji: '🧚', rarity: 'uncommon', level: 2 },
        { id: 'wind_3', name: '风暴', emoji: '🌀', rarity: 'rare', level: 3 },
        { id: 'wind_4', name: '风神', emoji: '🌪️', rarity: 'epic', level: 4 },
        { id: 'wind_5', name: '天空之神', emoji: '☁️', rarity: 'legendary', level: 5 },
    ],
    // 生肖卡牌系列（每个生肖5个等级）
    zodiac: [
        { id: 'zodiac_rat_1', name: '鼠', emoji: '🐭', rarity: 'common', level: 1 },
        { id: 'zodiac_rat_2', name: '鼠精灵', emoji: '🐀', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_rat_3', name: '鼠战士', emoji: '🐁', rarity: 'rare', level: 3 },
        { id: 'zodiac_rat_4', name: '鼠王', emoji: '🐹', rarity: 'epic', level: 4 },
        { id: 'zodiac_rat_5', name: '鼠神', emoji: '🌟', rarity: 'legendary', level: 5 },
        { id: 'zodiac_ox_1', name: '牛', emoji: '🐂', rarity: 'common', level: 1 },
        { id: 'zodiac_ox_2', name: '牛魔王', emoji: '🐃', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_ox_3', name: '牛战士', emoji: '🐄', rarity: 'rare', level: 3 },
        { id: 'zodiac_ox_4', name: '牛勇者', emoji: '🐮', rarity: 'epic', level: 4 },
        { id: 'zodiac_ox_5', name: '牛神', emoji: '🗿', rarity: 'legendary', level: 5 },
        { id: 'zodiac_tiger_1', name: '虎', emoji: '🐅', rarity: 'common', level: 1 },
        { id: 'zodiac_tiger_2', name: '白虎', emoji: '🐯', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_tiger_3', name: '虎王', emoji: '🐆', rarity: 'rare', level: 3 },
        { id: 'zodiac_tiger_4', name: '虎战神', emoji: '👑', rarity: 'epic', level: 4 },
        { id: 'zodiac_tiger_5', name: '虎神', emoji: '⚡', rarity: 'legendary', level: 5 },
        { id: 'zodiac_rabbit_1', name: '兔', emoji: '🐰', rarity: 'common', level: 1 },
        { id: 'zodiac_rabbit_2', name: '玉兔', emoji: '🐇', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_rabbit_3', name: '月兔', emoji: '🐰', rarity: 'rare', level: 3 },
        { id: 'zodiac_rabbit_4', name: '兔仙子', emoji: '🧚', rarity: 'epic', level: 4 },
        { id: 'zodiac_rabbit_5', name: '兔神', emoji: '🌙', rarity: 'legendary', level: 5 },
        { id: 'zodiac_dragon_1', name: '龙蛋', emoji: '🥚', rarity: 'common', level: 1 },
        { id: 'zodiac_dragon_2', name: '幼龙', emoji: '🐉', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_dragon_3', name: '青龙', emoji: '🐲', rarity: 'rare', level: 3 },
        { id: 'zodiac_dragon_4', name: '神龙', emoji: '🐉', rarity: 'epic', level: 4 },
        { id: 'zodiac_dragon_5', name: '龙神', emoji: '🐲', rarity: 'legendary', level: 5 },
        { id: 'zodiac_snake_1', name: '小蛇', emoji: '🐍', rarity: 'common', level: 1 },
        { id: 'zodiac_snake_2', name: '灵蛇', emoji: '🐉', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_snake_3', name: '蛇妖', emoji: '🐲', rarity: 'rare', level: 3 },
        { id: 'zodiac_snake_4', name: '蛇后', emoji: '👑', rarity: 'epic', level: 4 },
        { id: 'zodiac_snake_5', name: '蛇神', emoji: '🐍', rarity: 'legendary', level: 5 },
        { id: 'zodiac_horse_1', name: '马', emoji: '🐴', rarity: 'common', level: 1 },
        { id: 'zodiac_horse_2', name: '千里马', emoji: '🐎', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_horse_3', name: '飞马', emoji: '🦄', rarity: 'rare', level: 3 },
        { id: 'zodiac_horse_4', name: '天马', emoji: '🐴', rarity: 'epic', level: 4 },
        { id: 'zodiac_horse_5', name: '马神', emoji: '🌟', rarity: 'legendary', level: 5 },
        { id: 'zodiac_sheep_1', name: '羊', emoji: '🐑', rarity: 'common', level: 1 },
        { id: 'zodiac_sheep_2', name: '绵羊', emoji: '🐐', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_sheep_3', name: '白羊', emoji: '🐑', rarity: 'rare', level: 3 },
        { id: 'zodiac_sheep_4', name: '仙羊', emoji: '🐐', rarity: 'epic', level: 4 },
        { id: 'zodiac_sheep_5', name: '羊神', emoji: '☁️', rarity: 'legendary', level: 5 },
        { id: 'zodiac_monkey_1', name: '猴', emoji: '🐒', rarity: 'common', level: 1 },
        { id: 'zodiac_monkey_2', name: '灵猴', emoji: '🐵', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_monkey_3', name: '猴王', emoji: '🙊', rarity: 'rare', level: 3 },
        { id: 'zodiac_monkey_4', name: '齐天大圣', emoji: '🙉', rarity: 'epic', level: 4 },
        { id: 'zodiac_monkey_5', name: '猴神', emoji: '🙈', rarity: 'legendary', level: 5 },
        { id: 'zodiac_rooster_1', name: '鸡', emoji: '🐔', rarity: 'common', level: 1 },
        { id: 'zodiac_rooster_2', name: '火鸡', emoji: '🐓', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_rooster_3', name: '凤凰', emoji: '🦃', rarity: 'rare', level: 3 },
        { id: 'zodiac_rooster_4', name: '不死鸟', emoji: '🔥', rarity: 'epic', level: 4 },
        { id: 'zodiac_rooster_5', name: '鸡神', emoji: '🗿', rarity: 'legendary', level: 5 },
        { id: 'zodiac_dog_1', name: '狗', emoji: '🐕', rarity: 'common', level: 1 },
        { id: 'zodiac_dog_2', name: '哮天犬', emoji: '🐩', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_dog_3', name: '天狗', emoji: '🐕', rarity: 'rare', level: 3 },
        { id: 'zodiac_dog_4', name: '犬神', emoji: '🐩', rarity: 'epic', level: 4 },
        { id: 'zodiac_dog_5', name: '狗神', emoji: '🌟', rarity: 'legendary', level: 5 },
        { id: 'zodiac_pig_1', name: '猪', emoji: '🐷', rarity: 'common', level: 1 },
        { id: 'zodiac_pig_2', name: '野猪', emoji: '🐗', rarity: 'uncommon', level: 2 },
        { id: 'zodiac_pig_3', name: '天蓬元帅', emoji: '🐖', rarity: 'rare', level: 3 },
        { id: 'zodiac_pig_4', name: '猪八戒', emoji: '🐷', rarity: 'epic', level: 4 },
        { id: 'zodiac_pig_5', name: '猪神', emoji: '🐽', rarity: 'legendary', level: 5 },
    ],
    // 美食卡牌系列
    food: [
        { id: 'food_fruit_1', name: '苹果', emoji: '🍎', rarity: 'common', level: 1 },
        { id: 'food_fruit_2', name: '橙子', emoji: '🍊', rarity: 'uncommon', level: 2 },
        { id: 'food_fruit_3', name: '葡萄', emoji: '🍇', rarity: 'rare', level: 3 },
        { id: 'food_fruit_4', name: '西瓜', emoji: '🍉', rarity: 'epic', level: 4 },
        { id: 'food_fruit_5', name: '水果之王', emoji: '🍍', rarity: 'legendary', level: 5 },
        { id: 'food_dessert_1', name: '蛋糕', emoji: '🍰', rarity: 'common', level: 1 },
        { id: 'food_dessert_2', name: '冰淇淋', emoji: '🍦', rarity: 'uncommon', level: 2 },
        { id: 'food_dessert_3', name: '甜甜圈', emoji: '🍩', rarity: 'rare', level: 3 },
        { id: 'food_dessert_4', name: '巧克力', emoji: '🍫', rarity: 'epic', level: 4 },
        { id: 'food_dessert_5', name: '甜品大师', emoji: '🧁', rarity: 'legendary', level: 5 },
        { id: 'food_main_1', name: '米饭', emoji: '🍚', rarity: 'common', level: 1 },
        { id: 'food_main_2', name: '面条', emoji: '🍜', rarity: 'uncommon', level: 2 },
        { id: 'food_main_3', name: '披萨', emoji: '🍕', rarity: 'rare', level: 3 },
        { id: 'food_main_4', name: '汉堡', emoji: '🍔', rarity: 'epic', level: 4 },
        { id: 'food_main_5', name: '食神', emoji: '👨🍳', rarity: 'legendary', level: 5 },
    ],
    // 自然卡牌系列
    nature: [
        { id: 'nature_plant_1', name: '种子', emoji: '🌱', rarity: 'common', level: 1 },
        { id: 'nature_plant_2', name: '小花', emoji: '🌸', rarity: 'uncommon', level: 2 },
        { id: 'nature_plant_3', name: '大树', emoji: '🌳', rarity: 'rare', level: 3 },
        { id: 'nature_plant_4', name: '古树', emoji: '🌲', rarity: 'epic', level: 4 },
        { id: 'nature_plant_5', name: '世界树', emoji: '🌿', rarity: 'legendary', level: 5 },
        { id: 'nature_weather_1', name: '晴天', emoji: '🌞', rarity: 'common', level: 1 },
        { id: 'nature_weather_2', name: '云朵', emoji: '☁️', rarity: 'uncommon', level: 2 },
        { id: 'nature_weather_3', name: '彩虹', emoji: '🌈', rarity: 'rare', level: 3 },
        { id: 'nature_weather_4', name: '极光', emoji: '🌌', rarity: 'epic', level: 4 },
        { id: 'nature_weather_5', name: '创世神', emoji: '✨', rarity: 'legendary', level: 5 },
        { id: 'nature_ocean_1', name: '贝壳', emoji: '🐚', rarity: 'common', level: 1 },
        { id: 'nature_ocean_2', name: '海星', emoji: '⭐', rarity: 'uncommon', level: 2 },
        { id: 'nature_ocean_3', name: '珊瑚', emoji: '🪸', rarity: 'rare', level: 3 },
        { id: 'nature_ocean_4', name: '鲸鱼', emoji: '🐋', rarity: 'epic', level: 4 },
        { id: 'nature_ocean_5', name: '海皇', emoji: '🌊', rarity: 'legendary', level: 5 },
    ],
    // 神话卡牌系列
    myth: [
        { id: 'myth_beast_1', name: '麒麟', emoji: '🦄', rarity: 'common', level: 1 },
        { id: 'myth_beast_2', name: '凤凰', emoji: '🔥', rarity: 'uncommon', level: 2 },
        { id: 'myth_beast_3', name: '玄武', emoji: '🐢', rarity: 'rare', level: 3 },
        { id: 'myth_beast_4', name: '朱雀', emoji: '🐦', rarity: 'epic', level: 4 },
        { id: 'myth_beast_5', name: '青龙', emoji: '🐉', rarity: 'legendary', level: 5 },
        { id: 'myth_god_1', name: '山神', emoji: '⛰️', rarity: 'common', level: 1 },
        { id: 'myth_god_2', name: '河神', emoji: '🌊', rarity: 'uncommon', level: 2 },
        { id: 'myth_god_3', name: '雷神', emoji: '⚡', rarity: 'rare', level: 3 },
        { id: 'myth_god_4', name: '太阳神', emoji: '☀️', rarity: 'epic', level: 4 },
        { id: 'myth_god_5', name: '天帝', emoji: '👑', rarity: 'legendary', level: 5 },
        { id: 'myth_monster_1', name: '小妖', emoji: '👺', rarity: 'common', level: 1 },
        { id: 'myth_monster_2', name: '妖精', emoji: '🧝', rarity: 'uncommon', level: 2 },
        { id: 'myth_monster_3', name: '魔王', emoji: '👹', rarity: 'rare', level: 3 },
        { id: 'myth_monster_4', name: '妖王', emoji: '👿', rarity: 'epic', level: 4 },
        { id: 'myth_monster_5', name: '魔神', emoji: '☠️', rarity: 'legendary', level: 5 },
    ],
};

// 稀有度权重配置
const RARITY_WEIGHTS = {
    common: 50,
    uncommon: 30,
    rare: 15,
    epic: 4,
    legendary: 1,
};

// 盲盒配置
const BOX_CONFIG = {
    '100': { name: '普通盲盒', weights: { common: 60, uncommon: 25, rare: 12, epic: 2, legendary: 1 } },
    '500': { name: '高级盲盒', weights: { common: 30, uncommon: 35, rare: 25, epic: 8, legendary: 2 } },
    '2000': { name: '传奇盲盒', weights: { common: 10, uncommon: 25, rare: 35, epic: 22, legendary: 8 } },
};

// 游戏状态
let gameState = {
    gold: 0,
    goldPerSecond: 50,
    lastUpdateTime: Date.now(),
    cards: {},
    achievements: [],
};

// DOM元素
const goldCountEl = document.getElementById('gold-count');
const resetBtn = document.getElementById('reset-btn');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const buyBtns = document.querySelectorAll('.buy-btn');
const cardReveal = document.getElementById('card-reveal');
const cardInner = document.querySelector('.card-inner');
const cardBackEmoji = document.querySelector('.card-back .card-emoji');
const cardBackTitle = document.querySelector('.card-back .card-title');
const cardBackRarityBadge = document.querySelector('.card-back .card-rarity-badge');
const cardBackSeries = document.querySelector('.card-back .card-series');
const obtainMessage = document.getElementById('obtain-message');
const myCardsEl = document.getElementById('my-cards');
const collectionCardsEl = document.getElementById('collection-cards');
const seriesTabs = document.querySelectorAll('.series-tab');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const achievementPopup = document.getElementById('achievement-popup');
const achievementDesc = document.querySelector('.achievement-desc');
const mergeModal = document.getElementById('merge-modal');
const mergeCard1 = document.getElementById('merge-card-1');
const mergeCard2 = document.getElementById('merge-card-2');
const mergeBtn = document.getElementById('merge-btn');

let selectedCards = [];
let goldIntervalId = null;

// 初始化游戏
function initGame() {
    loadGame();
    updateOfflineGold();
    registerServiceWorker();
    addVisibilityListener();
    addMessageListener();
    startGoldProduction();
    bindEvents();
    renderMyCards();
    renderCollection();
}

// 加载游戏存档
function loadGame() {
    const saved = localStorage.getItem('cardGameData');
    if (saved) {
        try {
            gameState = JSON.parse(saved);
        } catch (e) {
            console.error('加载存档失败:', e);
        }
    } else {
        gameState.gold = 100;
        gameState.cards = {};
        gameState.lastUpdateTime = Date.now();
    }
    gameState.goldPerSecond = 50;
    updateGoldDisplay();
}

// 保存游戏存档
function saveGame() {
    gameState.lastUpdateTime = Date.now();
    localStorage.setItem('cardGameData', JSON.stringify(gameState));
    syncToServiceWorker();
}

// 同步数据到Service Worker
function syncToServiceWorker() {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            type: 'UPDATE_STATE',
            payload: {
                gold: gameState.gold,
                goldPerSecond: gameState.goldPerSecond,
                lastUpdateTime: gameState.lastUpdateTime,
            }
        });
    }
}

// 更新离线收益
function updateOfflineGold() {
    const lastTime = gameState.lastUpdateTime || Date.now();
    const now = Date.now();
    const offlineSeconds = (now - lastTime) / 1000;
    const maxOfflineSeconds = 8 * 60 * 60;
    const effectiveSeconds = Math.min(offlineSeconds, maxOfflineSeconds);
    
    if (effectiveSeconds > 60) {
        const offlineGold = effectiveSeconds * gameState.goldPerSecond;
        gameState.gold += offlineGold;
        alert(`离线收益：+${Math.floor(offlineGold)} 金币`);
    }
    
    gameState.lastUpdateTime = now;
    saveGame();
}

// 注册Service Worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(err => {
                console.log('Service Worker registration failed:', err);
            });
    }
}

// 添加页面可见性监听
function addVisibilityListener() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            saveGame();
        } else {
            updateOfflineGold();
        }
    });
}

// 添加消息监听
function addMessageListener() {
    navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data.type === 'GOLD_UPDATE') {
            gameState.gold = event.data.payload.gold;
            updateGoldDisplay();
        }
    });
}

// 开始金币自动产出
function startGoldProduction() {
    if (goldIntervalId) clearInterval(goldIntervalId);
    
    goldIntervalId = setInterval(() => {
        gameState.gold += gameState.goldPerSecond / 5;
        updateGoldDisplay();
        if (Math.random() < 0.02) {
            saveGame();
        }
    }, 200);
}

// 更新金币显示
function updateGoldDisplay() {
    goldCountEl.textContent = formatNumber(gameState.gold);
    document.querySelector('.gold-per-second').textContent = `+${gameState.goldPerSecond}/s`;
}

// 格式化数字
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return Math.floor(num).toString();
}

// 绑定事件
function bindEvents() {
    // 标签切换
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const targetId = tab.dataset.tab;
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // 系列标签切换
    seriesTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            seriesTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCollection();
        });
    });
    
    // 购买盲盒
    buyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const boxItem = e.target.closest('.blind-box-item');
            const cost = parseInt(boxItem.dataset.cost);
            
            if (gameState.gold >= cost) {
                gameState.gold -= cost;
                updateGoldDisplay();
                openBlindBox(cost);
            } else {
                alert('金币不足！');
            }
        });
    });
    
    // 重置按钮
    resetBtn.addEventListener('click', resetGame);
    
    // 关闭合成弹窗
    document.querySelector('.close-modal').addEventListener('click', closeMergeModal);
    
    // 合成按钮
    mergeBtn.addEventListener('click', performMerge);
}

// 打开盲盒
function openBlindBox(cost) {
    const weights = BOX_CONFIG[cost.toString()].weights;
    const rarity = getRandomRarity(weights);
    const series = getRandomSeries();
    const card = getRandomCardByRarity(series, rarity);
    
    showCardReveal(card);
    addCard(card.id);
}

// 获取随机稀有度
function getRandomRarity(weights) {
    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    
    for (const [rarity, weight] of Object.entries(weights)) {
        random -= weight;
        if (random <= 0) {
            return rarity;
        }
    }
    return 'common';
}

// 获取随机系列
function getRandomSeries() {
    const series = ['fire', 'water', 'earth', 'wind', 'zodiac', 'food', 'nature', 'myth'];
    return series[Math.floor(Math.random() * series.length)];
}

// 根据稀有度获取卡牌
function getRandomCardByRarity(series, targetRarity) {
    const cards = CARD_DATA[series];
    const rarityOrder = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
    const targetIndex = rarityOrder.indexOf(targetRarity);
    
    const availableCards = cards.filter(c => rarityOrder.indexOf(c.rarity) <= targetIndex);
    const targetCards = cards.filter(c => c.rarity === targetRarity);
    
    if (targetCards.length > 0 && Math.random() > 0.2) {
        return targetCards[Math.floor(Math.random() * targetCards.length)];
    }
    
    return availableCards[Math.floor(Math.random() * availableCards.length)];
}

// 显示卡牌翻转动画
function showCardReveal(card) {
    if (!card || !card.id || !card.emoji || !card.name || !card.rarity) {
        console.error('无效的卡牌数据:', card);
        return;
    }
    
    cardReveal.classList.remove('hidden');
    cardInner.classList.remove('flipped');
    
    const rarityColors = {
        common: { bg: 'linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%)', border: '#6b6b6b', badgeBg: '#6b6b6b' },
        uncommon: { bg: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)', border: '#4caf50', badgeBg: '#4caf50' },
        rare: { bg: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)', border: '#2196f3', badgeBg: '#2196f3' },
        epic: { bg: 'linear-gradient(135deg, #6a1b9a 0%, #4a148c 100%)', border: '#9c27b0', badgeBg: '#9c27b0' },
        legendary: { bg: 'linear-gradient(135deg, #e65100 0%, #bf360c 100%)', border: '#ff9800', badgeBg: '#ff9800' },
    };
    
    const style = rarityColors[card.rarity] || rarityColors.common;
    const cardBack = document.querySelector('.card-back');
    cardBack.style.background = style.bg;
    cardBack.style.border = `3px solid ${style.border}`;
    
    cardBackEmoji.textContent = card.emoji;
    cardBackTitle.textContent = card.name;
    cardBackRarityBadge.textContent = getRarityText(card.rarity);
    cardBackRarityBadge.style.background = style.badgeBg;
    cardBackSeries.textContent = getSeriesName(card.id.split('_')[0]);
    
    setTimeout(() => {
        cardInner.classList.add('flipped');
    }, 500);
    
    setTimeout(() => {
        obtainMessage.textContent = `获得 ${card.name}！`;
    }, 1300);
    
    setTimeout(() => {
        cardReveal.classList.add('hidden');
        obtainMessage.textContent = '';
        renderMyCards();
        renderCollection();
        checkAchievements();
    }, 4000);
}

// 获取稀有度文本
function getRarityText(rarity) {
    const texts = {
        common: '普通',
        uncommon: '稀有',
        rare: '精良',
        epic: '史诗',
        legendary: '传说',
    };
    return texts[rarity] || rarity;
}

// 获取系列名称
function getSeriesName(series) {
    const names = {
        fire: '火系',
        water: '水系',
        earth: '土系',
        wind: '风系',
        zodiac: '生肖',
        food: '美食',
        nature: '自然',
        myth: '神话',
    };
    return names[series] || series;
}

// 添加卡牌
function addCard(cardId) {
    if (!gameState.cards[cardId]) {
        const cardInfo = getCardInfo(cardId);
        gameState.cards[cardId] = { count: 1, level: cardInfo ? cardInfo.level : 1 };
    } else {
        gameState.cards[cardId].count++;
    }
    saveGame();
}

// 获取卡牌信息
function getCardInfo(cardId) {
    for (const series of Object.values(CARD_DATA)) {
        const card = series.find(c => c.id === cardId);
        if (card) return card;
    }
    return null;
}

// 渲染我的卡牌列表
function renderMyCards() {
    myCardsEl.innerHTML = '';
    const cardList = Object.entries(gameState.cards);
    
    if (cardList.length === 0) {
        myCardsEl.innerHTML = '<p style="text-align: center; color: #888;">暂无卡牌，快去购买盲盒吧！</p>';
        return;
    }
    
    cardList.forEach(([cardId, data]) => {
        const cardInfo = getCardInfo(cardId);
        if (!cardInfo) return;
        
        const cardEl = document.createElement('div');
        cardEl.className = `card-item rarity-${cardInfo.rarity}`;
        cardEl.dataset.cardId = cardId;
        
        const shineHtml = cardInfo.rarity === 'legendary' ? '<div class="card-shine"></div>' : '';
        
        cardEl.innerHTML = `
            ${shineHtml}
            <div class="card-top-deco"></div>
            <div class="card-content">
                <div class="card-emoji-wrap">
                    <div class="card-emoji">${cardInfo.emoji}</div>
                </div>
                <div class="card-info">
                    <span class="card-name">${cardInfo.name}</span>
                    <span class="card-level">Lv.${data.level}</span>
                </div>
            </div>
            ${data.count > 1 ? `<span class="card-count">${data.count}</span>` : ''}
        `;
        
        cardEl.addEventListener('click', () => selectCardForMerge(cardId));
        myCardsEl.appendChild(cardEl);
    });
}

// 选择卡牌进行合成
function selectCardForMerge(cardId) {
    const cardData = gameState.cards[cardId];
    
    if (!cardData || cardData.count < 2) {
        return;
    }
    
    if (selectedCards.length >= 2) {
        selectedCards = [];
        document.querySelectorAll('.card-item').forEach(c => c.classList.remove('selected'));
    }
    
    if (!selectedCards.includes(cardId)) {
        selectedCards.push(cardId);
        document.querySelector(`[data-card-id="${cardId}"]`).classList.add('selected');
    }
    
    if (selectedCards.length === 2 && selectedCards[0] === selectedCards[1]) {
        showMergeModal(cardId);
    } else if (selectedCards.length === 2) {
        selectedCards = [];
        document.querySelectorAll('.card-item').forEach(c => c.classList.remove('selected'));
        alert('请选择两张相同的卡牌进行合成！');
    }
}

// 显示合成弹窗
function showMergeModal(cardId) {
    const cardInfo = getCardInfo(cardId);
    
    mergeCard1.innerHTML = `
        <div style="font-size: 30px;">${cardInfo.emoji}</div>
        <span style="font-size: 10px;">${cardInfo.name}</span>
    `;
    mergeCard1.classList.add('filled');
    mergeCard1.style.borderColor = getRarityColor(cardInfo.rarity);
    
    mergeCard2.innerHTML = `
        <div style="font-size: 30px;">${cardInfo.emoji}</div>
        <span style="font-size: 10px;">${cardInfo.name}</span>
    `;
    mergeCard2.classList.add('filled');
    mergeCard2.style.borderColor = getRarityColor(cardInfo.rarity);
    
    const nextCard = getNextLevelCard(cardId);
    if (nextCard) {
        document.querySelector('.merge-arrow').textContent = `→ Lv.${nextCard.level}`;
        mergeBtn.disabled = false;
    } else {
        document.querySelector('.merge-arrow').textContent = '→ MAX';
        mergeBtn.disabled = true;
    }
    
    mergeModal.classList.remove('hidden');
}

// 获取下一级卡牌
function getNextLevelCard(cardId) {
    const cardInfo = getCardInfo(cardId);
    if (!cardInfo) return null;
    
    const parts = cardId.split('_');
    const series = parts[0];
    let currentLevel;
    
    if (parts.length === 2) {
        currentLevel = parseInt(parts[1]);
    } else if (parts.length === 3) {
        currentLevel = parseInt(parts[2]);
    } else {
        return null;
    }
    
    if (currentLevel >= 5) return null;
    
    return CARD_DATA[series].find(c => {
        const cParts = c.id.split('_');
        if (cParts.length === 2) {
            return c.level === currentLevel + 1;
        } else if (cParts.length === 3) {
            return cParts[1] === parts[1] && c.level === currentLevel + 1;
        }
        return false;
    });
}

// 获取稀有度颜色
function getRarityColor(rarity) {
    const colors = {
        common: '#9e9e9e',
        uncommon: '#4caf50',
        rare: '#2196f3',
        epic: '#9c27b0',
        legendary: '#ff9800',
    };
    return colors[rarity] || '#9e9e9e';
}

// 执行合成
function performMerge() {
    const cardId = selectedCards[0];
    const cardInfo = getCardInfo(cardId);
    const nextCard = getNextLevelCard(cardId);
    
    if (!nextCard) {
        alert('该卡牌已达到最高等级！');
        return;
    }
    
    gameState.cards[cardId].count -= 2;
    
    if (gameState.cards[cardId].count <= 0) {
        delete gameState.cards[cardId];
    }
    
    if (!gameState.cards[nextCard.id]) {
        gameState.cards[nextCard.id] = { count: 1, level: nextCard.level };
    } else {
        gameState.cards[nextCard.id].count++;
    }
    
    saveGame();
    
    mergeModal.classList.add('hidden');
    selectedCards = [];
    mergeCard1.innerHTML = '';
    mergeCard2.innerHTML = '';
    mergeCard1.classList.remove('filled');
    mergeCard2.classList.remove('filled');
    mergeBtn.disabled = true;
    
    renderMyCards();
    renderCollection();
    checkAchievements();
    
    alert(`合成成功！\n${cardInfo.name} → ${nextCard.name}`);
}

// 关闭合成弹窗
function closeMergeModal() {
    mergeModal.classList.add('hidden');
    selectedCards = [];
    document.querySelectorAll('.card-item').forEach(c => c.classList.remove('selected'));
}

// 渲染图鉴
function renderCollection() {
    const selectedSeries = document.querySelector('.series-tab.active').dataset.series;
    
    let allCards = [];
    if (selectedSeries === 'all') {
        for (const series of Object.values(CARD_DATA)) {
            allCards = allCards.concat(series);
        }
    } else {
        allCards = CARD_DATA[selectedSeries] || [];
    }
    
    collectionCardsEl.innerHTML = '';
    
    allCards.forEach(card => {
        const isOwned = gameState.cards[card.id];
        const cardEl = document.createElement('div');
        cardEl.className = `card-item ${isOwned ? `rarity-${card.rarity}` : 'locked'}`;
        
        const shineHtml = isOwned && card.rarity === 'legendary' ? '<div class="card-shine"></div>' : '';
        
        cardEl.innerHTML = `
            ${shineHtml}
            <div class="card-top-deco"></div>
            <div class="card-content">
                <div class="card-emoji-wrap">
                    <div class="card-emoji">${isOwned ? card.emoji : '❓'}</div>
                </div>
                <div class="card-info">
                    <span class="card-name">${card.name}</span>
                    <span class="card-level">${isOwned ? `Lv.${gameState.cards[card.id].level}` : '未拥有'}</span>
                </div>
            </div>
            ${isOwned && gameState.cards[card.id].count > 1 ? `<span class="card-count">${gameState.cards[card.id].count}</span>` : ''}
        `;
        
        collectionCardsEl.appendChild(cardEl);
    });
    
    updateProgress();
}

// 更新进度
function updateProgress() {
    const totalCards = Object.values(CARD_DATA).reduce((sum, series) => sum + series.length, 0);
    const ownedCards = Object.keys(gameState.cards).length;
    const progress = (ownedCards / totalCards) * 100;
    
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `收集进度: ${ownedCards}/${totalCards} (${Math.round(progress)}%)`;
}

// 检查成就
function checkAchievements() {
    const totalCards = Object.keys(gameState.cards).length;
    
    const seriesCompleted = [];
    for (const [seriesName, cards] of Object.entries(CARD_DATA)) {
        const hasAll = cards.every(c => gameState.cards[c.id]);
        if (hasAll && !gameState.achievements.includes(`series_${seriesName}`)) {
            gameState.achievements.push(`series_${seriesName}`);
            showAchievement(`集齐${getSeriesName(seriesName)}！`);
        }
    }
    
    const milestones = [5, 10, 15, 20, 30, 50, 80];
    milestones.forEach(milestone => {
        const achievementId = `collect_${milestone}`;
        if (totalCards >= milestone && !gameState.achievements.includes(achievementId)) {
            gameState.achievements.push(achievementId);
            showAchievement(`收集${milestone}张卡牌！`);
        }
    });
    
    saveGame();
}

// 显示成就弹窗
function showAchievement(message) {
    achievementDesc.textContent = message;
    achievementPopup.classList.remove('hidden');
    
    setTimeout(() => {
        achievementPopup.classList.add('hidden');
    }, 3000);
}

// 重置游戏
function resetGame() {
    if (confirm('确定要重置游戏吗？所有数据将被清除！')) {
        gameState = {
            gold: 100,
            goldPerSecond: 50,
            lastUpdateTime: Date.now(),
            cards: {},
            achievements: [],
        };
        saveGame();
        renderMyCards();
        renderCollection();
        updateGoldDisplay();
    }
}

document.addEventListener('DOMContentLoaded', initGame);