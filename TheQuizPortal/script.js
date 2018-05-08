        var showquiz = () => {
            if (document.querySelector('.username').validity.valid) {
                (function () {
                    document.querySelector('ul').style.display = 'block';
                    var uname = document.querySelector('.uname');
                    var uscore = document.querySelector('.uscore');
                    var reset = document.querySelector('.reset');
                    uname.innerHTML = `Welcome, ${document.querySelector('.username').value}`;
                    uname.style.fontSize = '20px';
                    uscore.innerHTML = `Your Score: 0`;
                    uscore.style.fontSize = '20px';

                    function Question(question, answers, correct) {
                        this.question = question;
                        this.answers = answers;
                        this.correct = correct;
                    };

                    var lastScore;
                    
                    var form = document.querySelector(".form");
                    var bclose = document.querySelector(".close");
                    bclose.addEventListener('click', function() {
                        form.innerHTML = `Your Final Score: ${lastScore}`;
                        var cans = document.querySelector(".cans");
                        cans.parentElement.removeChild(cans);
                        var bclose2 = document.createElement('button');
                        bclose2.setAttribute('class', 'close2');
                        bclose2.innerHTML = 'Close';
                        form.appendChild(bclose2);
                        bclose2.addEventListener('click', function() {
                            window.location = 'index.html';
                        });
                        var conhide = document.querySelector(".container3");
                        conhide.style.display = 'none';
                    });
                    
                    Question.prototype.showQuestion = function () {
                        form.innerHTML = `Q.) ${this.question}`;
                        form.style.fontSize = '20px';
                        form.appendChild(document.createElement('br'));

                        for (var i = 0; i < this.answers.length; i++) {
                            //console.log(i + ': ' + this.answers[i]);
                            var label = document.createElement("label");
                            var input = document.createElement('input');
                            input.type = "radio";
                            input.name = "ans";
                            input.value = i;
                            form.appendChild(input);
                            form.appendChild(document.createTextNode(this.answers[i]));
                            form.appendChild(document.createElement('br'));
                        }
                        form.appendChild(document.createElement('br'));
                        var button1 = document.createElement('button');
                        button1.setAttribute('class', 'check');
                        button1.innerHTML = 'Check Answer';
                        form.appendChild(button1);
                    }

                    Question.prototype.checkAnswer = function (ans, callback) {
                        if (ans === this.correct) {
                            document.querySelector('.cans').innerHTML = 'Correct Answer';
                            console.log('Correct Answer');
                            sc = callback(true);

                        } else {
                            document.querySelector('.cans').innerHTML = 'Wrong Answer';
                            console.log('Wrong answer');
                            sc = callback(false);

                        }
                        this.showScore(sc);
                    }

                    Question.prototype.showScore = function (score) {
                        console.log('Current Score is ' + score);
                        uscore.innerHTML = `Your Score: ${score}`;
                        lastScore = score;
                    }

                    var q1 = new Question('In the decade with the first transatlantic radio broadcast occur?', ['1850', '1860', '1870', '1900'], 3);
                    var q2 = new Question('The battle of plassey was fought in?', ['1757', '1782', '1748', '1764'], 0);
                    var q3 = new Question('Under Akbar, the Mir Bakshi was required to look after?', ['sutlej', 'jhelum', 'ravi', 'ganga'], 0);
                    var q4 = new Question('Tripitakas are sacred books of?', ['buddhists', 'hindus', 'jains', 'none'], 0);
                    var q5 = new Question('the trident-shaped symbol of buddhism does not represent?', ['Nirvana', 'sangha', 'buddha', 'dhamma'], 0);
                    var q6 = new Question('The name of the Laccadive, Minicoy and Amindivi islands was changed to Lakshadweep by an Act of Parliament in?', ['1970', '1971', '1972', '1973'], 3);
                    var q7 = new Question('The members of the Rajya Sabha are elected by?', ['the people', 'the loksabha', 'elected members of the legislative assembly', 'elected members of the legislative council'], 2);
                    var q8 = new Question('The power to decide an election petition is vested in the?', ['parliament', 'supreme court', 'high court', 'election commission'], 2);
                    var q9 = new Question('The present Lok Sabha is the?', ['13th loksabha', '14th loksabha', '15th loksabha', '16th loksabha'], 3);
                    var q10 = new Question('What is part of a database that holds only one type of information?', ['report', 'field', 'record', 'file'], 1);
                    var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

                    function score() {
                        var sc = 0;
                        return function (correct) {
                            if (correct) {
                                sc++;
                            }
                            return sc;
                        }
                    }

                    var keepScore = score();

                    function nextQuestion() {
                        var n = Math.floor(Math.random() * questions.length);
                        questions[n].showQuestion();
                        var button1 = document.querySelector('.check');
                        button1.addEventListener('click', function () {
                            var answer = document.querySelector('input[name = "ans"]:checked').value;
                            questions[n].checkAnswer(parseInt(answer), keepScore);

                            nextQuestion();
                        });
                    }


                    nextQuestion();

                })();
            } else {
                alert('Please Enter Username!!')
            }

        };
