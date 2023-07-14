<template>
    <div id="app">
      <h1>TEXT COUNT</h1>
      <br>
      <br>
      <div class="text-container">
        <h2>Enter text:</h2>
        <textarea v-model="myText"></textarea>
      </div>
  
      <div class="button-container">
        <button @click="countText" class="submit-button">Count Text</button>
      </div>
  
      <div v-if="showCounts" class="count-container">
        <div class="count-box">Word count: {{ getWordCount() }}</div>
        <div class="count-box">Vowel count: {{ getVowelCount() }}</div>
        <div class="count-box">Sentence count: {{ getSentenceCount() }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        myText: "",
        showCounts: false
      };
    },
    methods: {
      countText() {
        if (this.myText !== "") {
          this.showCounts = true;
          
        } else {
          this.showCounts = false;
          
        }
      },
      getWordCount() {
        if (this.myText === "") {
          return 0;
        } else {
          return this.myText.split(" ").length;
        }
      },
      getSentenceCount() {
        if (this.myText === "") {
          return 0;
        } else {
          return this.myText.split(/[.!?;]/).length;
        }
      },
      getVowelCount() {
        let counts = 0;
        for (let i = 0; i < this.myText.length; i++) {
          if (
            this.myText[i] === "a" ||
            this.myText[i] === "e" ||
            this.myText[i] === "i" ||
            this.myText[i] === "o" ||
            this.myText[i] === "u"
          ) {
            counts += 1;
          }
        }
        return counts;
        
      },
      reset(){
        this.myText= "";
      }
    }
  };
  </script>
  
  <style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vh;
  font-family: Arial, sans-serif;
  text-align: center;
}

.text-container {
  margin-bottom: 20px;

}

.text-container textarea {
  width: 300px;
  height: 100px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #161414;
  background-color: #65a083;
  color:cornsilk;
}

.count-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-top: 16px;
}

.count-box {
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

.word-count {
  background-color: rgb(173, 230, 181);
}

.vowel-count {
  background-color: rgb(224, 238, 144);
}

.sentence-count {
  background-color: rgb(255, 182, 227);
}

/* Optional: Add some spacing around the text input and results */
@media (min-width: 768px) {
  .text-container {
    margin-bottom: 32px;
  }
  .submit-button {
    background-color: #699ec9;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-button:hover {
    background-color: #75cc6e;
  }
}
</style>