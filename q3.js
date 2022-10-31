Vue.component('q3', {
  template: `
  <div class="q3-contents contents-scroll">
    <div class="chatMessage-Advisor" v-show="zakQ1ChatArea1">
        <div class="person">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading1">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
            <div v-show="zakChatText1"> 浴槽まわりの希望をお伺いします。</div>
        </div>
    </div>
    <div class="chatMessage-Advisor chatText_3" v-show="zakQ1ChatArea2">
        <div class="person">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading2">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
            <div v-show="zakChatText2"> 湯船につかる頻度が多い場合は、浴槽の形が重要です。</div>
        </div>
    </div>

    <div class="chatMessage-Advisor" v-show="zakQ1ChatArea3">
        <div class="person hidden">
        </div>
        <div class="chatText chatText_2">
            <div class="loading" v-show="zakLoading3">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
            <div v-show="zakChatText3"> 浴槽の形にこだわりはありますか？</div>
        </div>
    </div>
    <div class="chatMessage-Question chatMessage-Question02" v-if="status === 3">
      <label id="btnBox" class="Question-inner02" v-on:click="question()" v-for="product in products" v-bind:key="product.id">
          <input type="radio" name="btn" :value="product.id">
          <img  class="QuestionText-title img-note" v-bind:src="product.image">
          <span class="QuestionText QuestionText_3" v-html='product.text'></span>
      </label>
    </div>
    <!---浴槽の形にこだわりはありますか？ANSWER -->
    <div class="chatMessage-User" v-show="chatBox">
        <div class="person hidden">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading4">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
                <div v-if='answer1'>{{ products[0].answer }}</div>
                <div v-else-if='answer2'>{{ products[1].answer }}</div>
                <div v-else-if='answer3'>{{ products[2].answer }}</div>
            <div class="chatText__already-read" v-show="zakReadq3">既読</div>
        </div>
    </div>
    <q4 ref="child3" @change="changeZakReadq3"  :sec="sec"></q4>
  </div>
  `,
  props: ['zakReadq2', 'sec'],
  data: function () {
    return {
      zakQ1ChatArea1: false,
      zakQ1ChatArea2: false,
      zakQ1ChatArea3: false,
      zakLoading1: true,
      zakLoading2: true,
      zakLoading3: true,
      zakLoading4: true,
      zakChatText1: false,
      zakChatText2: false,
      zakChatText3: false,
      chatBox: false,
      answer1: false,
      answer2: false,
      answer3: false,
      status: 0,
      zakReadq3: false,
      products: [
        { "id": 1, "text": "広さ重視", "image": "","answer": "広さ重視です"},
        { "id": 2, "text": "節水重視", "image": "","answer": "節水重視です"},
        { "id": 3, "text": "特になし", "image": "","answer": "特になしです"}
      ],
    }
  },
  computed: {
    newZakReadq2: {
      get() {
        return this.zakReadq2;
      },
      set(newVal2) {
        this.$emit('change', newVal2);
      }
    }
  },
  methods: {
    changeZakReadq3: function (newVal3) {
      this.zakReadq3 = newVal3;
    },
    zakShowchatQ1: function () {
      let self = this;
      self.zakQ1ChatArea1 = true;
      self.newZakReadq2 = true;
      setTimeout(function () {
        (self.zakChatText1 = true), (self.zakLoading1 = false);
        setTimeout(function () {
          self.zakShowchatQ2();
        }, self.sec);
      }, self.sec);
    },

    zakShowchatQ2: function () {
      let self = this;
      self.zakQ1ChatArea2 = true;
      scrollBy({top: 200, behavior: 'smooth'});
      setTimeout(function () {
        (self.zakChatText2 = true), (self.zakLoading2 = false);
        setTimeout(function () {
          self.zakShowchatQ3();
        }, self.sec);
      }, self.sec);
    },

    zakShowchatQ3: function () {
      let self = this;
      self.zakQ1ChatArea3 = true;
      setTimeout(function () {
        (self.zakChatText3 = true), (self.zakLoading3 = false);
        setTimeout(function () {
          scrollBy({top: 100, behavior: 'smooth'});
          self.status = 3;
        }, self.sec);
      }, self.sec);
    },

    question: function () {
      let btn = document.getElementsByName('btn');
      let checkValue = '';
      let self = this;
      for (let i = 0; i < 3; i++) {
        if (btn.item(i).checked) {
          checkValue = btn.item(i).value;
        }
      }
      if (checkValue === "1") {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading4 = false,
                self.answer1 = true;
                setTimeout(() => {
                  self.$refs.child3.zakShowchat();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (checkValue === "2") {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading4 = false,
                self.answer2 = true;
                setTimeout(() => {
                  self.$refs.child3.zakShowchat();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (checkValue === "3") {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading4 = false,
                self.answer3 = true;
                setTimeout(() => {
                  self.$refs.child3.zakShowchat();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
    },
  },
})
