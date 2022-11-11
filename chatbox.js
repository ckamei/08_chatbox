Vue.component('chatbox', {
  components: {
    "q1":q1,
    "q2":q2,
  },
  template: `
    <div>
      <div class="q1-contents" v-for="product in products">
          <div class="chatMessage-Advisor" v-show="zakQ1ChatArea">
              <div class="person">
              </div>
              <div class="chatText">
                  <div class="loading" v-show="zakLoading1" >
                      <div class="load-item"></div>
                      <div class="load-item"></div>
                      <div class="load-item"></div>
                  </div>
                  <div v-show="zakChatText">{{ product.id1.question }}</div>
              </div>
          </div>
          <div class="chatMessage-Question chatMessage-Question02"  id="hiddenStatus">
            <div for="btnBox" class="Question-inner02" v-on:click="question(index)" v-for="(queBtn, index) in product" v-bind:key="queBtn.btnId">
                <input  id="btnBox" type="radio" :value="queBtn.btnId">
                <img  class="QuestionText-title img-note" v-bind:src="queBtn.image">
                <span class="QuestionText" v-html='queBtn.text'></span>
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
                      <div v-for="(queAns, index) in product">
                        <div v-show='index === selectIdx'>{{ queAns.answer }}</div>
                      </div>
                  <div class="chatText__already-read" v-show="zakReadq1">既読</div>
              </div>
          </div>
      </div>
    </div>
  `,
  props:['sec', 'products'],
  data: function () {
    return {
      zakQ1ChatArea: false,
      zakLoading1: true,
      zakLoading2: true,
      zakChatText: false,
      chatBox: false,
      answers: false,
      status: 1,
      zakReadq1: false,
      selectIdx: null,
    }
  },
  methods: {
    changeZakReadq1: function (newVal) {
      this.zakReadq1 = newVal;
    },

    loopChat: function () {
      return this.products
    },
    //チャット部分
    zakShowchatQ1: function () {
      for (let i = 0; i < 2; i++) {
        if (this.status === 1) {
          //console.log(this.product.answer);
        }
      }

      let self = this;
      self.zakQ1ChatArea = true;
      setTimeout(function () {
        self.zakLoading1 = false,
        self.zakChatText = true;
        self.$emit('child-scroll');
        setTimeout(function () {
          self.status = 1;
          },self.sec)
        }, self.sec)
    },

    //button押したら、チャットが表示する関数
    question: function (index) {
      let self = this;
      
      if (self.selectIdx = index) {
        setTimeout(() => {
          document.getElementById('hiddenStatus').classList.add("hiddenStatus");
          self.chatBox = true;
            setTimeout(() => {
              self.zakLoading2 = false,
                self.answers = true,
                setTimeout(() => {
                  self.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
    },
  },
})
