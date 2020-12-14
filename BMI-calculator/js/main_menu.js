//take data from html
const dataForm = document.getElementById("calculator-form");
const calculateButton = document.getElementById("CALCULATE");

//Represent data
class Data {
    constructor(date, name, bmi, gender, number) {
        this.date = date;
        this.name = name;
        this.bmi = bmi;
        this.gender = gender;
        this.number = number;
    }
}

//Handle Counting (Perhitungan)
class Count {
    //Handle BMI Counting
    static counting(height, weight) {
        var a = (weight / (height * 0.01) ** 2);
        let rounding = a.toFixed(1);
        return rounding;
    }

    //Male BMI 
    static male(male) {
        if (male < 18.5) {
            UI.showAlert(`Your BMI is ${male} \n You are skinny`, 'info');
            var skinny = "skinny";
            return skinny;
        } else if (18.5 <= male && male < 22.9) {
            UI.showAlert(`Your BMI is ${male}\n You are normal`, 'info');
            var normal = "normal";
            return normal;
        } else if (22.9 <= male && male < 24.9) {
            UI.showAlert(`Your BMI is ${male}\nYou are overweight`, 'info');
            var overweight = "overweight";
            return overweight;
        } else {
            UI.showAlert(`Your BMI is ${male}\nYou have obesity`, 'info');
            var obesity = 'obesity';
            return obesity;
        }
    }

    //Female BMI
    static female(female) {
        if (female < 17) {
            UI.showAlert(`Your BMI is ${female} \nYou are skinny`, 'info');
            var skinny = "skinny";
            return skinny;
        } else if (17 <= female && female < 23) {
            UI.showAlert(`Your BMI is ${female} \nYou are normal`, 'info');
            var normal = "normal";
            return normal;
        } else if (23 <= female && female < 27) {
            UI.showAlert(`Your BMI is ${female} \nYou are overweight`, 'info');
            var overweight = "overweight";
            return overweight;
        } else {
            UI.showAlert(`Your BMI is ${female} \nYou have obesity`, 'info');
            var obesity = 'obesity';
            return obesity;
        }
    }

    //Split gender between male and female
    static split(gender, height, weight, number) {
        if (gender === 'MALE') {
            var result = Count.male(Count.counting(height, weight));
            Count.recommendation(result, number);
            return result
        } else if (gender === 'FEMALE') {
            var result = Count.female(Count.counting(height, weight));
            Count.recommendation(result, number);
            return result
        } else {
            UI.showAlert("", "error");
        }
    }

    //Check data before proceed
    static forward(name, gender, height, weight, data, number) {
        var parameter = confirm(`Is the data correct?\nNama: ${name}.\nGender: ${gender}.\nHeight: ${height} cm.\nWeight: ${weight} kg.`);
        if (parameter == true) {
            Count.split(gender, height, weight, number);

            //Tambahkan data to local
            Store.addData(data);

            //Tambahkan data ke UI
            UI.addDataToList(data);

            //Hapus Field
            UI.clearFields();

        } else {}; 
    }

    //Start when page start and reload
    static reload(gender, bmi, number) {
        if (gender === 'MALE') {
            if (bmi < 18.5) {
                var result = "skinny";
                Count.recommendation(result, number);
            } else if (18.5 <= bmi && bmi <= 22.9) {
                var result = "normal";
                Count.recommendation(result, number);
            } else if (23 <= bmi && bmi <= 24.9) {
                var result = "overweight";
                Count.recommendation(result, number);
            } else {
                var result = 'obesity';
                Count.recommendation(result, number);
            }

        } else if (gender === 'FEMALE') {
            if (bmi < 17) {
                var result = "skinny";
                Count.recommendation(result, number);
            } else if (17 <= bmi && bmi <= 22.9) {
                var result = "normal";
                Count.recommendation(result, number);
            } else if (23 <= bmi && bmi <= 26.9) {
                var result = "overweight";
                Count.recommendation(result, number);
            } else {
                var result = 'obesity';
                Count.recommendation(result, number);
            }
        } else {
            UI.showAlert("", "error");
        }
    }

    //Button click (Still inefficient)
    static recommendation(result, number) {
        if (number == '0') {
            if (result === 'skinny') {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_kurus.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_kurus.html'
                }
            } else if (result === 'normal') {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_normal.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_normal.html'
                }
            } else if (result === 'berat') {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_gemuk.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_gemuk.html'
                }
            } else {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_obesitas.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_obesitas.html'
                }
            }
        } else if (number == '1') {
            if (result === 'skinny') {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_kurus1.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_kurus1.html'
                }
            } else if (result === 'normal') {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_normal1.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_normal1.html'
                }
            } else if (result === 'berat') {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_gemuk1.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_gemuk1.html'
                }
            } else {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_obesitas1.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_obesitas1.html'
                }
            }
        } else if (number == '2') {
            if (result === 'skinny') {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_kurus2.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_kurus2.html'
                }
            } else if (result === 'normal') {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_normal2.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_normal2.html'
                }
            } else if (result === 'berat') {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_gemuk2.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_gemuk2.html'
                }
            } else {
                document.getElementById("FOOD").onclick = function() {
                    location.href = 'food-html/food_obesitas2.html'
                }
                document.getElementById("WORKOUT").onclick = function() {
                    location.href = 'workout-html/workout_obesitas2.html'
                }
            }
        } else {
            UI.showAlert("", "error");
        }
    }
}

//Handle UI that showed on screen
class UI {
    //Display datas (In this case, the table)
    static displayDatas() {
        const datas = Store.getDatas();

        datas.forEach((data) => UI.addDataToList(data));
    }

    //UI add data to table
    static addDataToList(data) {
        const list = document.querySelector('#data-body');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td id='date'>${data.date}</td>
        <td id='name'>${data.name}</td>
        <td id='bmi'>${data.bmi}</td>
        <td id='del'><a href='#' class='delete'>&#128465</a></td>
        `;

        list.appendChild(row);
    }

    //UI Remove data from table 
    static deleteData(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    //UI Alert System (Involve parameter "Message that we want to type" & "class name for CSS")
    static showAlert(message, className) {
        const container = document.querySelector('.Main_menu');
        const form = document.querySelector("#calculator-form");
        if (className == 'validation') {
            const div = document.createElement('div');
            div.className = `alert alert-${className}`;
            div.appendChild(document.createTextNode(message));

            container.insertBefore(div, form);
    
            setTimeout(function(){
                document.querySelectorAll(".alert").forEach(e => e.parentNode.removeChild(e));
            }, 5000);

        } else {
            const div_1 = document.createElement('div');
            const div_2 = document.createElement('div');
            div_1.className = `alert trans`
            div_2.className = `alert alert-${className}`;
            div_2.appendChild(document.createTextNode(message));

            container.insertBefore(div_1, form);
            container.insertBefore(div_2, form);
            if (className == 'info'){
                setTimeout(function(){
                    document.querySelectorAll(".alert").forEach(e => e.parentNode.removeChild(e));
                }, 4000);
            } else {
                setTimeout(function(){
                    document.querySelectorAll(".alert").forEach(e => e.parentNode.removeChild(e));
                }, 3000);
            }
        }
    }
    
    //UI Welcoming Page
    static showAlertID(id) {
        const container = document.querySelector('.Main_menu');
        const form = document.querySelector("#calculator-form");
        if (id == 1) {
            const div = document.createElement('div');
            div.setAttribute("id", "alert-first");
            container.insertBefore(div, form);

            var alertFirst = document.querySelector("#alert-first");
            
            setTimeout(function () {
                document.getElementById("alert-first").onclick = function () {
                    alertFirst.classList.toggle('fade');
                };
                document.getElementById(`alert-first`).click();
            }, 3000);

            setTimeout(function(){
                document.querySelectorAll("#alert-first").forEach(e => e.parentNode.removeChild(e));
            }, 4000);

        } else if (id == 2) {
            const div = document.createElement('div');
            div.setAttribute("id", "alert-second");
            container.insertBefore(div, form);

            var alertSecond = document.querySelector("#alert-second");

            setTimeout(function () {
                document.getElementById("alert-second").onclick = function () {
                    alertSecond.classList.toggle('fade');
                };
                document.getElementById(`alert-second`).click();
            }, 7000);
                
            setTimeout(function(){
                document.querySelectorAll("#alert-second").forEach(e => e.parentNode.removeChild(e));
            }, 8000);
        } else {
            UI.showAlert("", "error");
        }
    }

    //UI Testing button for loading and first time
    static recommendationButton () {
        if (localStorage.getItem('datas') === null) {
            UI.showAlertID("2");
            UI.showAlertID("1");
            const datas = Store.getDatas();

            datas.push();

            localStorage.setItem('datas', JSON.stringify(datas));
            
        } else {
            var array = JSON.parse(localStorage.getItem('datas'));
            var index = array.length;
            
            var test = array.length == 0 ? 'true' : 'false';
            
            if (test === 'true') {
                console.log ("Zero Data");
            }
            else {
                var check = array [index-1];

                const gender = check.gender;
                const bmi = check.bmi;
                const number = check.number;
        
                Count.reload (gender, bmi, number);
            }
        }
    }

    //UI Erase field (The input field)
    static clearFields() {
        document.getElementById('Name').value = '';
        document.getElementById('Height').value = '';
        document.getElementById('Weight').value = '';
    }
}

//Store Classs: handle data
class Store {
    //Get data from local storage
    static getDatas() {
        let datas;
        if (localStorage.getItem('datas') === null) {
            datas = [];
        } else {
            datas = JSON.parse(localStorage.getItem('datas'));
        }

        return datas;
    };

    //Add data to local storage
    static addData(data) {
        const datas = Store.getDatas();

        datas.push(data);

        localStorage.setItem('datas', JSON.stringify(datas));
    };

    //Remove data from local storage
    static removeData(bmi) {
        const datas = Store.getDatas();

        datas.forEach((data, index) => {
            if (data.bmi === bmi) {
                datas.splice(index, 1);
            }
        });
        //reset local storage setelah data dihapus
        localStorage.setItem('datas', JSON.stringify(datas));
    };
}


//Show record in table
document.addEventListener('DOMContentLoaded', UI.displayDatas);
    UI.recommendationButton();
    

//See input
calculateButton.addEventListener("click", (e) => {
    //Prevent Submit
    e.preventDefault();

    //take data
    const name = dataForm.Name.value;
    const gender = dataForm.Gender.value;
    const height = dataForm.Height.value;
    const weight = dataForm.Weight.value;

    //to convert date to dd - mm - yyyy
    Date.prototype.toShortFormat = function() {
        let monthNames = ["Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ];
        let day = this.getDate();
        let monthIndex = this.getMonth();
        let monthName = monthNames[monthIndex];
        let year = this.getFullYear();
        return `${day}-${monthName}-${year}`;
    }

    let today = new Date();
    const date = today.toShortFormat();
    const bmi = Count.counting(height, weight);
    const number = Math.floor(Math.random() * 3);
    const data = new Data(date, name, bmi, gender, number);

    if (name == '' || height == '' || weight == '') {
        UI.showAlert("Please fill in the missing field", "validation");
    } else {
        Count.forward(name, gender, height, weight, data, number);
    }
})

//to see the remove button click
document.querySelector('#data-body').addEventListener('click', (e) =>  {
    //hapus data di UI
    UI.deleteData(e.target);

    // //hapus data
    Store.removeData(e.target.parentElement.previousElementSibling.textContent);

    //alert
    UI.showAlert("", "danger");
});
