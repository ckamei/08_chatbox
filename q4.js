Vue.component('q4', {
  template: `
  <div class="q4-contents contents-scroll">
      <div class="chatMessage-Advisor" v-show="zakQ1ChatArea">
          <div class="person">
          </div>
          <div class="chatText">
              <div class="loading" v-show="zakLoading1">
                  <div class="load-item"></div>
                  <div class="load-item"></div>
                  <div class="load-item"></div>
              </div>
              <div v-show="zakChatText"> お湯の冷めにくい、保温効果のある浴槽をご希望されますか？</div>
          </div>
      </div>
      <div class="chatMessage-Question chatMessage-Question02" v-if="status === 4">
        <label id="btnBox" class="Question-inner02" v-on:click="question()" v-for="product in products" v-bind:key="product.id">
            <input type="radio" name="btn" :value="product.id">
            <img  class="QuestionText-title img-note" v-bind:src="product.image">
            <span class="QuestionText QuestionText_3" v-html='product.text'></span>
        </label>
      </div>
    <!---お湯の冷めにくい、保温効果のある浴槽をご希望されますか？ANSWER -->
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
            <div class="chatText__already-read" v-show="zakReadq4">既読</div>
        </div>
    </div>
    <q5 ref="child4" @change="changeZakReadq4"  :sec="sec"></q5>
  </div>
  `,
  props: ['zakReadq3', 'sec'],
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
      zakReadq4: false,
      products: [
        { "id": 1, "text": "はい", "image": "","answer": "はい"},
        { "id": 2, "text": "興味がある", "image": "","answer": "興味があります"},
        { "id": 3, "text": "いいえ", "image": "","answer": "いいえ"}
      ],
    }
  },
  computed: {
    newZakReadq3: {
      get() {
        return this.zakReadq3;
      },
      set(newVal3) {
        this.$emit('change', newVal3);
      }
    }
  },
  methods: {
    changeZakReadq4: function (newVal4) {
      this.zakReadq4 = newVal4;
    },
    zakShowchat: function () {
      let self = this;
      self.zakQ1ChatArea = true;
      self.newZakReadq3 = true;
      setTimeout(function () {
        (self.zakChatText = true), (self.zakLoading1 = false);
        setTimeout(function () {
          self.status = 4;
          scrollBy({top: 250, behavior: 'smooth'});
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
              self.zakLoading2 = false,
                self.answer1 = true,
                setTimeout(() => {
                  self.$refs.child4.zakShowchat();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (checkValue === "2") {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading2 = false,
                self.answer2 = true,
                setTimeout(() => {
                  self.$refs.child4.zakShowchat();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (checkValue === "3") {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading2 = false,
                self.answer3 = true,
                setTimeout(() => {
                  self.$refs.child4.zakShowchat();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
    },
  },
})
