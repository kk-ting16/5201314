window.onload = function() {
    const confirmModal = document.getElementById('confirmModal');
    const openBtn = document.getElementById('openBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const snowContainer = document.getElementById('snow-container');

    function createSnow() {
        const snowCount = 80;
        for (let i = 0; i < snowCount; i++) {
            const snow = document.createElement('div');
            snow.textContent = '❄️';
            snow.style.position = 'absolute';
            snow.style.left = `${Math.random() * 100}vw`;
            snow.style.top = `${-Math.random() * 50}px`;
            snow.style.fontSize = `${8 + Math.random() * 8}px`;
            snow.style.animation = `fall ${5 + Math.random() * 10}s linear infinite`;
            snow.style.opacity = 0.5 + Math.random() * 0.5;
            snowContainer.appendChild(snow);
        }
    }

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); }
            100% { 
                transform: translateY(100vh) rotate(360deg); 
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);

    function openGift() {
        confirmModal.style.display = 'none';
        const surpriseTexts = [
            '❄️ 冬日快乐！',
            '☃️ 愿你温暖过冬～',
            '热可可和雪花更配哦！',
            '今年冬天一起看雪吧！',
            '🎁 这是你的专属惊喜～',
            '这个冬天有我陪你！',
            '要天天开心哦 ❤️',
            '天天开心 消除烦恼！',
            '多喝热水 多穿衣服哦',
            '新的一年 新的一岁💗',
            '保持好心情~',
            '记得想我哟~😘',
            '我一直在想你🐶',
            '好运来~🧧好运来~🧧',
            '按时吃饭🍔 按时睡觉💤',
            '我爱你！',
        ];
        const surpriseCount = 150;
        
        for (let i = 0; i < surpriseCount; i++) {
            setTimeout(() => {
                const surpriseModal = document.createElement('div');
                surpriseModal.className = 'surprise-modal';
                surpriseModal.textContent = surpriseTexts[Math.floor(Math.random() * surpriseTexts.length)];
                surpriseModal.style.left = `${5 + Math.random() * 80}vw`;
                surpriseModal.style.top = `${5 + Math.random() * 80}vh`;
                document.body.appendChild(surpriseModal);

                setTimeout(() => {
                    surpriseModal.style.opacity = 0;
                    surpriseModal.style.transform = 'scale(0)';
                    setTimeout(() => document.body.removeChild(surpriseModal), 50000000);
                }, 500000000);
            }, i * 150);
        }
    }

    function cancelGift() {
        confirmModal.style.display = 'none';
        const tip = document.createElement('div');
        tip.className = 'surprise-modal';
        tip.textContent = '🎁 礼物会为你保留～冬日愉快！';
        tip.style.left = '50%';
        tip.style.top = '50%';
        tip.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(tip);
        setTimeout(() => {
            tip.style.opacity = 0;
            setTimeout(() => document.body.removeChild(tip), 500);
        }, 2000);
    }

    openBtn.addEventListener('click', openGift);
    cancelBtn.addEventListener('click', cancelGift);
    createSnow();
};

