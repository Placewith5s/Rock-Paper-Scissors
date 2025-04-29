'use strict';
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        class Rock_Paper_Scissors {
            constructor () {
                // null by default
                this.plr_selection = null;
                this.computer_selection = null;
                this.rock_btn_event = null;
                this.paper_btn_event = null;
                this.scissors_btn_event = null;

                // query selector
                this.rock_btn = document.querySelector("#plr-rock");
                this.paper_btn = document.querySelector("#plr-paper");
                this.scissors_btn = document.querySelector("#plr-scissors");
                this.plr_result_text = document.querySelector("#plr-result-text");
                this.computer_result_text = document.querySelector("#computer-result-text");
                this.state_text = document.querySelector("#state-text");

                if (!this.rock_btn || !this.paper_btn || !this.scissors_btn || !this.plr_result_text || !this.computer_result_text || !this.state_text) {
                    console.error("Game items not found!")
                }
                this.clean_up()
            }

            clean_up() {
                console.info("Cleaning previous game...");
                console.time("timer");

                // null by default go back to null
                this.plr_selection = null;
                this.computer_selection = null;

                // event listeners (if any)
                if (this.rock_btn_event && this.paper_btn_event && this.scissors_btn_event) {
                    this.rock_btn.removeEventListener("click", this.rock_btn_event);
                    this.paper_btn.removeEventListener("click", this.paper_btn_event);
                    this.scissors_btn.removeEventListener("click", this.scissors_btn_event)
                } else {
                    console.log("Fresh game detected")
                }
                this.listeners()

                console.info("Cleaning done");
                console.timeEnd("timer")
            }

            listeners() {
                let debounce_rock_btn = false;
                let debounce_paper_btn = false;
                let debounce_scissors_btn = false;

                this.rock_btn_event = () => {
                    if (debounce_rock_btn) {
                        return
                    }
                    debounce_rock_btn = true;

                    this.plr_selection = "rock"
                    console.log(`Player chose ${this.plr_selection}`);
                    this.plr_result_text.textContent = `You chose ${this.plr_selection}`;
                    this.computer()

                    setTimeout(() => {
                        debounce_rock_btn = false
                    }, 100)
                }

                this.rock_btn.addEventListener("click", this.rock_btn_event, {passive: true})

                this.paper_btn_event = () => {
                    if (debounce_paper_btn) {
                        return
                    }
                    debounce_paper_btn = true;

                    this.plr_selection = "paper"
                    console.log(`Player chose ${this.plr_selection}`);
                    this.plr_result_text.textContent = `You chose ${this.plr_selection}`;
                    this.computer()

                    setTimeout(() => {
                        debounce_paper_btn = false
                    }, 100)
                }

                this.paper_btn.addEventListener("click", this.paper_btn_event, {passive: true})

                this.scissors_btn_event = () => {
                    if (debounce_scissors_btn) {
                        return
                    }
                    debounce_scissors_btn = true;

                    this.plr_selection = "scissors"
                    console.log(`Player chose ${this.plr_selection}`);
                    this.plr_result_text.textContent = `You chose ${this.plr_selection}`;
                    this.computer()

                    setTimeout(() => {
                        debounce_scissors_btn = false
                    }, 100)
                }

                this.scissors_btn.addEventListener("click", this.scissors_btn_event, {passive: true})
            }

            computer() {
                let result = Math.floor(Math.random() * 3);
                switch (result) {
                    case 0:
                        this.computer_selection = "rock"
                        console.log(`Computer chose ${this.computer_selection}`);
                        this.computer_result_text.textContent = `Computer chose ${this.computer_selection}`;
                        break
                    case 1:
                        this.computer_selection = "paper"
                        console.log(`Computer chose ${this.computer_selection}`);
                        this.computer_result_text.textContent = `Computer chose ${this.computer_selection}`;
                        break
                    case 2:
                        this.computer_selection = "scissors"
                        console.log(`Computer chose ${this.computer_selection}`);
                        this.computer_result_text.textContent = `Computer chose ${this.computer_selection}`;
                        break
                    default:
                        console.log("Got number:", result)
                }

                if (this.computer_selection && this.plr_selection) {
                    switch (this.computer_selection) {
                        case "rock":
                            if (this.plr_selection === "rock") {
                                console.log("Draw / Tie");
                                this.state_text.textContent = "Draw / Tie";
                                this.state_text.style.color = "rgb(0, 0, 0)";
                                this.clean_up()
                            }

                            if (this.plr_selection === "paper") {
                                console.log("Player won");
                                this.state_text.textContent = "You won";
                                this.state_text.style.color = "rgb(0, 240, 0)";
                                this.clean_up()
                            }

                            if (this.plr_selection === "scissors") {
                                console.log("Player lost");
                                this.state_text.textContent = "You lost";
                                this.state_text.style.color = "rgb(240, 0, 0)";
                                this.clean_up()
                            }
                            break
                        case "paper":
                            if (this.plr_selection === "paper") {
                                console.log("Draw / Tie");
                                this.state_text.textContent = "Draw / Tie";
                                this.state_text.style.color = "rgb(0, 0, 0)";
                                this.clean_up()
                            }

                            if (this.plr_selection === "rock") {
                                console.log("Player lost");
                                this.state_text.textContent = "You lost";
                                this.state_text.style.color = "rgb(240, 0, 0)";
                                this.clean_up()
                            }

                            if (this.plr_selection === "scissors") {
                                console.log("Player won");
                                this.state_text.textContent = "You won";
                                this.state_text.style.color = "rgb(0, 240, 0)";
                                this.clean_up()
                            }
                            break
                        case "scissors":
                            if (this.plr_selection === "scissors") {
                                console.log("Draw / Tie");
                                this.state_text.textContent = "Draw / Tie";
                                this.state_text.style.color = "rgb(0, 0, 0)";
                                this.clean_up()
                            }

                            if (this.plr_selection === "paper") {
                                console.log("Player lost");
                                this.state_text.textContent = "You lost";
                                this.state_text.style.color = "rgb(240, 0, 0)";
                                this.clean_up()
                            }

                            if (this.plr_selection === "rock") {
                                console.log("Player won");
                                this.state_text.textContent = "You won";
                                this.state_text.style.color = "rgb(0, 240, 0)";
                                this.clean_up()
                            }
                            break
                        default:
                            console.log("Got empty:", this.computer_selection)
                    }
                }
            }
        }
        new Rock_Paper_Scissors()
    })
})();