<template>
  <div id="app">
    <h1>TEXT COUNT</h1>
    <br>
    <br>
    <div class="text-container">
      <h2>Enter text:</h2>
      <textarea v-model="myText"></textarea>
    </div>

    <div class="count-container">
      <div class="count-box word-count">Word count: {{ wordCount }}</div>
      <div class="count-box vowel-count">Vowel count: {{ vowelCount }}</div>
      <div class="count-box sentence-count">Sentence count: {{ sentenceCount }}</div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        myText: ""
      };
    },
    computed: {
      wordCount() {
        if (this.myText === "") {
          return 0;
        } else {
          return this.myText.split(" ").length;
        }
      },
      sentenceCount() {
        if (this.myText === "") {
          return 0;
        } else {
          return this.myText.split(/[.!?;]/).length;
        }
      },
      vowelCount() {
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
  font-family: Arial, sans-serif;
  text-align: center;
}

.text-container {
  margin-bottom: 16px;
}

.text-container textarea {
  width: 300px;
  height: 100px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #161414;
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
  background-color: lightblue;
}

.vowel-count {
  background-color: lightgreen;
}

.sentence-count {
  background-color: lightpink;
}

/* Optional: Add some spacing around the text input and results */
@media (min-width: 768px) {
  .text-container {
    margin-bottom: 32px;
  }
}
</style>