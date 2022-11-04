Vue.component('q2', {
  template: `
  <div class="q2-contents">
      <div class="chatMessage-Advisor" v-show="zakQ1ChatArea">
          <div class="person">
          </div>
          <div class="chatText">
              <div class="loading" v-show="zakLoading1">
                  <div class="load-item"></div>
                  <div class="load-item"></div>
                  <div class="load-item"></div>
              </div>
              <div v-show="zakChatText"> 希望されるお風呂の大きさは、どのくらいですか？</div>
          </div>
      </div>
      <div class="chatMessage-Question chatMessage-Question02" v-if="status === 2">
        <div for="btnBox" class="Question-inner02" v-on:click="question(index)" v-for="(product, index) in products" v-bind:key="product.id">
            <input id="btnBox" type="radio" :value="product.id">
            <img  class="QuestionText-title img-note" v-bind:src="product.image" :class="{active:index === 1, active2:index === 0}">
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
            <div class="chatText__already-read" v-show="zakReadq2">既読</div>
        </div>
    </div>
    <q3 ref="child2" @change="changeZakReadq2" :sec="sec"></q3>
  </div>
  `,
  props:['zakReadq1', 'sec'],
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
      zakReadq2: false,
      active: true,
      products: [
        { "id": 1, "text": "２畳未満", "image": "images/2jo.png","answer": "２畳未満です"},
        { "id": 2, "text": "２畳以上", "image": "images/more2jo.png","answer": "２畳以上です"},
        { "id": 3, "text": "わからない", "image": "images/idk.png","answer": "わからないです"}
      ],
    }
  },
  computed: {
    newZakReadq1: {
      get() {
        return this.zakReadq1;
      },
      set(newVal) {
        this.$emit('change', newVal);
      }
    },
  },
  methods: {
    changeZakReadq2: function (newVal2) {
      this.zakReadq2 = newVal2;
    },
    zakShowchatQ1: function () {
      let self = this;
      self.zakQ1ChatArea = true;
      self.newZakReadq1 = true;
      setTimeout(function () {
        (self.zakChatText = true), (self.zakLoading1 = false);
        setTimeout(function () {
          self.status = 2;
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
                  self.$refs.child2.zakShowchatQ1();
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
                  self.$refs.child2.zakShowchatQ1();
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
                  self.$refs.child2.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
    },
  },
})
