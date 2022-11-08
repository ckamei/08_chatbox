Vue.component('q6', {
  template: `
  <div class="q6-contents ">
    <div class="chatMessage-Advisor" v-show="zakQ1ChatArea1">
        <div class="person">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading1">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
            <div v-show="zakChatText1"> お風呂に埋込み型のオーディオを設置すると、音の広がりがよく、また見た目もスッキリします。</div>
        </div>
    </div>
    <div class="chatMessage-Advisor" v-show="zakQ1ChatArea2">
        <div class="person hidden">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading2">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
            <div v-show="zakChatText2"> お風呂にオーディオの設置を希望されますか？</div>
        </div>
    </div>

    <div class="chatMessage-Question chatMessage-Question02" v-if="status === 6">
      <div for="btnBox" class="Question-inner02" v-on:click="question(index)" v-for="(product, index) in products" v-bind:key="product.id">
          <input  id="btnBox" type="radio"  :value="product.id">
          <img  class="QuestionText-title img-note" v-bind:src="product.image">
          <span class="QuestionText QuestionText_3" v-html='product.text'></span>
      </div>
    </div>
    <!---お風呂にオーディオの設置を希望されますか？ANSWER -->
    <div class="chatMessage-User" v-show="chatBox">
        <div class="person hidden">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading3">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
                <div v-if='answer1'>{{ products[0].answer }}</div>
                <div v-else-if='answer2'>{{ products[1].answer }}</div>
                <div v-else-if='answer3'>{{ products[2].answer }}</div>
            <div class="chatText__already-read" v-show="zakReadq6">既読</div>
        </div>
    </div>
    <q7 ref="child6" @change="changeZakReadq6" :sec="sec"></q7>
  </div>
  `,
  props: ['zakReadq5', 'sec'],
  data: function () {
    return {
      zakQ1ChatArea1: false,
      zakQ1ChatArea2: false,
      zakLoading1: true,
      zakLoading2: true,
      zakLoading3: true,
      zakChatText1: false,
      zakChatText2: false,
      chatBox: false,
      answer1: false,
      answer2: false,
      answer3: false,
      status: 0,
      zakReadq6: false,
      products: [
        { "id": 1, "text": "はい", "image": "","answer": "はい"},
        { "id": 2, "text": "興味がある", "image": "","answer": "興味があります"},
        { "id": 3, "text": "いいえ", "image": "","answer": "いいえ"}
      ],
    }
  },
  computed: {
    newZakReadq5: {
      get() {
        return this.zakReadq5;
      },
      set(newVal5) {
        this.$emit('change', newVal5);
      }
    }
  },
  methods: {
    changeZakReadq6: function (newVal6) {
      this.zakReadq6 = newVal6;
    },
    scrollFunc: function () {
      let app = document.querySelector('.q6-contents')
      app.scrollIntoView();
    },
    zakShowchatQ1: function () {
      let self = this;
      self.scrollFunc();
      self.zakQ1ChatArea1 = true;
      self.newZakReadq5 = true;
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
      setTimeout(function () {
        (self.zakChatText2 = true), (self.zakLoading2 = false);
        setTimeout(function () {
          self.scrollFunc();
          self.status = 6;
        }, self.sec);
      }, self.sec);
    },

    question: function (index) {
      let self = this;
      if (index === 0) {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading3 = false,
                self.answer1 = true,
                setTimeout(() => {
                  self.$refs.child6.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (index === 1) {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading3 = false,
                self.answer2 = true,
                setTimeout(() => {
                  self.$refs.child6.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (index === 2) {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading3 = false,
                self.answer3 = true,
                setTimeout(() => {
                  self.$refs.child6.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
    },
  },
})
