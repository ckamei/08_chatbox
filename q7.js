Vue.component('q7', {
  template: `
  <div class="q7-contents contents-scroll">
    <div class="chatMessage-Advisor" v-show="zakQ1ChatArea1">
        <div class="person">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading1">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
            <div v-show="zakChatText1"> ゆったりお湯に浸かりながら、最大24インチの大迫力の画面でテレビを楽しむこともできます。</div>
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
            <div v-show="zakChatText2"> お風呂にテレビの設置を希望されますか？</div>
        </div>
    </div>

    <div class="chatMessage-Question chatMessage-Question02" v-if="status === 7">
      <label id="btnBox" class="Question-inner02" v-on:click="question()" v-for="product in products" v-bind:key="product.id">
          <input type="radio" name="btn" :value="product.id">
          <img  class="QuestionText-title img-note" v-bind:src="product.image">
          <span class="QuestionText QuestionText_3" v-html='product.text'></span>
      </label>
    </div>
    <!---お風呂にテレビの設置を希望されますか？ANSWER -->
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
            <div class="chatText__already-read" v-show="zakReadq7">既読</div>
        </div>
    </div>
    <q8 ref="child7" @change="changeZakReadq7" :sec="sec"></q8>
  </div>
  `,
  props: ['zakReadq6', 'sec'],
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
      zakReadq7: false,
      products: [
        { "id": 1, "text": "はい", "image": "","answer": "はい"},
        { "id": 2, "text": "興味がある", "image": "","answer": "興味があります"},
        { "id": 3, "text": "いいえ", "image": "","answer": "いいえ"}
      ],
    }
  },
  computed: {
    newZakReadq6: {
      get() {
        return this.zakReadq6;
      },
      set(newVal6) {
        this.$emit('change', newVal6);
      }
    }
  },
  methods: {
    changeZakReadq7: function (newVal7) {
      this.zakReadq7 = newVal7;
    },
    zakShowchatQ1: function () {
      let self = this;
      self.zakQ1ChatArea1 = true;
      self.newZakReadq6 = true;
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
          scrollBy({top: 300, behavior: 'smooth'});
          self.status = 7;
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
              self.zakLoading3 = false,
                self.answer1 = true,
                setTimeout(() => {
                  self.$refs.child7.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (checkValue === "2") {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading3 = false,
                self.answer2 = true,
                setTimeout(() => {
                  self.$refs.child7.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (checkValue === "3") {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading3 = false,
                self.answer3 = true,
                setTimeout(() => {
                  self.$refs.child7.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
    },
  },
})
