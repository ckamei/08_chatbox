Vue.component('q5', {
  template: `
  <div class="q5-contents ">
      <div class="chatMessage-Advisor" v-show="zakQ1ChatArea">
          <div class="person">
          </div>
          <div class="chatText">
              <div class="loading" v-show="zakLoading1">
                  <div class="load-item"></div>
                  <div class="load-item"></div>
                  <div class="load-item"></div>
              </div>
              <div v-show="zakChatText"> リラックス・マッサージ効果のある、バブルバス・ジェットバスをご希望されますか？</div>
          </div>
      </div>
      <div class="chatMessage-Question chatMessage-Question02" v-if="status === 5">
        <div for="btnBox" class="Question-inner02" v-on:click="question(index)" v-for="(product, index) in products" v-bind:key="product.id">
            <input  id="btnBox" type="radio"  :value="product.id">
            <img  class="QuestionText-title img-note" v-bind:src="product.image">
            <span class="QuestionText QuestionText_3" v-html='product.text'></span>
        </div>
      </div>
    <!---リラックス・マッサージ効果のある、バブルバス・ジェットバスをご希望されますか？ANSWER -->
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
            <div class="chatText__already-read" v-show="zakReadq5">既読</div>
        </div>
    </div>
    <q6 ref="child5" @change="changeZakReadq5" :sec="sec"></q6>
  </div>
  `,
  props: ['zakReadq4', 'sec'],
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
      zakReadq5: false,
      products: [
        { "id": 1, "text": "はい", "image": "","answer": "はい"},
        { "id": 2, "text": "興味がある", "image": "","answer": "興味があります"},
        { "id": 3, "text": "いいえ", "image": "","answer": "いいえ"}
      ],
    }
  },
  computed: {
    newZakReadq4: {
      get() {
        return this.zakReadq4;
      },
      set(newVal4) {
        this.$emit('change', newVal4);
      }
    }
  },
  methods: {
    changeZakReadq5: function (newVal5) {
      this.zakReadq5 = newVal5;
    },
    zakShowchat: function () {
      let self = this;
      self.zakQ1ChatArea = true;
      self.newZakReadq4 = true;
      setTimeout(function () {
        (self.zakChatText = true), (self.zakLoading1 = false);
        setTimeout(function () {
          self.status = 5;
          scrollBy({top: 200, behavior: 'smooth'});
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
              self.zakLoading2 = false,
                self.answer1 = true,
                setTimeout(() => {
                  self.$refs.child5.zakShowchatQ1();
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
                  self.$refs.child5.zakShowchatQ1();
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
                  self.$refs.child5.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
    },
  },
})
