async function getRandomChinese(length) {
    let result = '';

    for (let i = 0; i < length; i++) {
        const myPromise = new Promise((resolve) => {
            setTimeout(() => {
                const sign = String.fromCharCode(+Date.now().toString().slice(-5));
                resolve(sign);
            }, length * 50);
        });
        result += await myPromise;
    }
    
    return result;
}

const input = document.getElementById('length');
const output = document.querySelector('.result');

getRandomChinese(input.value).then(result => output.textContent = result);

input.addEventListener('change', e => {
    getRandomChinese(e.target.value).then(result => {
        output.textContent = result
    });
});


