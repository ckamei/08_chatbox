
Vue.component('q1', {
  template: `
  <div class="q1-contents">
      <div class="chatMessage-Advisor" v-show="zakQ1ChatArea">
          <div class="person">
          </div>
          <div class="chatText">
              <div class="loading" v-show="zakLoading1" >
                  <div class="load-item"></div>
                  <div class="load-item"></div>
                  <div class="load-item"></div>
              </div>
              <div v-show="zakChatText"> 希望されるお風呂は、どのような形式ですか？</div>
          </div>
      </div>
      <div class="chatMessage-Question chatMessage-Question02" v-if="status === 1">
        <div for="btnBox" class="Question-inner02" v-on:click="question(index)" v-for="(product, index) in products" v-bind:key="product.id">
            <input id="btnBox" type="radio" :value="product.id">
            <img  class="QuestionText-title" v-bind:src="product.image">
            <span class="QuestionText" v-html='product.text'></span>
        </div>
      </div>
      <!---希望されるお風呂は、どのような形式ですか？ANSWER -->
      <div class="chatMessage-User" v-show="chatBox">
          <div class="person hidden">
          </div>
          <div class="chatText">
              <div class="loading" v-show="zakLoading2">
                  <div class="load-item"></div>
                  <div class="load-item"></div>
                  <div class="load-item"></div>
              </div>
                  <div v-if='answer1'>{{ products[0].answer }}</div>
                  <div v-else-if='answer2'>{{ products[1].answer }}</div>
                  <div v-else-if='answer3'>{{ products[2].answer }}</div>
              <div class="chatText__already-read" v-show="zakReadq1">既読</div>
          </div>
      </div>
      <!-- 希望されるお風呂の大きさは、どのくらいですか？ -->
      <q2 ref="child" @change="changeZakReadq1" :sec="sec"></q2>
  </div>
  `,
  props:['sec'],
  data: function () {
    return {
      zakQ1ChatArea: false,
      zakLoading1: true,
      zakLoading2: true,
      zakChatText: false,
      chatBox: false,
      answer1: false,
      answer2: false,
      answer3: false,
      status: 0,
      zakReadq1: false,
      products: [
        { "id": 1, "text": "ユニットバス", "image": "images/unitbath.png", "answer": "ユニットバスです"},
        { "id": 2, "text": "タイル貼り", "image": "images/tile.png","answer": "タイル貼りです"},
        { "id": 3, "text": "わからない", "image": "images/idk.png","answer": "わからないです"},
      ],
      answer1: false,
      answer2: false,
      answer3: false,
    }
  },
  methods: {
    changeZakReadq1: function (newVal) {
      this.zakReadq1 = newVal;
    },
    //チャット部分
    zakShowChat06: function () {
      return new Promise((resolve) => {
        let self = this;
        self.zakQ1ChatArea = true;
        setTimeout(function () {
          self.zakLoading1 = false,
          self.zakChatText = true;
          setTimeout(function () {
            self.status = 1,
            window.scrollTo({top: 0, behavior: 'smooth'});
          },self.sec)
          resolve();
        },self.sec)
      });
    },

    //button押したら、チャットが表示する関数
    question: function (index) {
      let self = this;
      if (index === 0) {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading2 = false,
                self.answer1 = true,
                setTimeout(() => {
                  self.$refs.child.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (index === 1) {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading2 = false,
                self.answer2 = true,
                setTimeout(() => {
                  self.$refs.child.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (index === 2) {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading2 = false,
                self.answer3 = true,
                setTimeout(() => {
                  self.$refs.child.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
    },
  },
})
