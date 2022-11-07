//完成：輸入身高>輸入體重>開始計算>顯示結果
//動作：讀取身高值>讀取體重值>計算>顯示







//誰
const tall = document.querySelector('.input_bar_tall')
const weight = document.querySelector('.input_bar_weight')
const calculate = document.querySelector('.calculate')
const recalculate = document.querySelector('.recalculate')
const output = document.querySelector('.output')
const BMIrate = document.querySelector('.BMIrate')
const result = document.querySelector('.result')
const suggestion = document.querySelector('.suggestion')


//什麼時候+做什麼
//按下開始計算按鈕 + 讀取身高值+體重值>計算>呈現結果

calculate.onclick = function(){
    let heightValue = tall.value
    let weightValue = weight.value
    // let result
    // let suggestion
    
    if (heightValue < 0 || isNaN(heightValue) ||  heightValue.trim() == '' || !Number.isInteger(Number(heightValue)) || weightValue < 0 || isNaN(weightValue) ||  weightValue.trim() == '' || !Number.isInteger(Number(weightValue))){
        alert('請檢查輸入內容!')
    }else{
        let BMI = (weightValue / ((heightValue / 100) **2)).toFixed(1)
        if(BMI < 18.5){
            result.innerHTML = '過輕'
            suggestion = '薯條加大是您的權力！'
        }else if(18.5 <= BMI && BMI <= 24){
            result.innerHTML = '正常'
            suggestion.innerHTML = '您是個好寶寶'
        }else if(24 <= BMI && BMI < 27){
            result.innerHTML = '過重'
            suggestion.innerHTML = '薯條中包+操場5圈還殼以~'
        }else if(27 <= BMI && BMI < 30){
            result.innerHTML = '輕度肥胖'
            suggestion.innerHTML = '您殼以吃2根薯條'
        }else if(30 <= BMI && BMI < 35){
            result.innerHTML = '中度肥胖'
            BMIsuggestion.innerHTML = '您勉強可以吃1根薯條'
        }else if(BMI >= 35){
            result.innerHTML = '重度肥胖'
            suggestion.innerHTML = '不要吃薯條~'
        }
        output.classList.add('act')
        BMIrate.innerHTML = BMI
        // console.log(output);


    }
}

recalculate.onclick = function(){
    output.classList.remove('act')
    tall = ''
    weight = ''
}