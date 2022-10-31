Vue.component('q10', {
  template: `
  <div class="q10-contents contents-scroll">
    <div class="chatMessage-Advisor" v-show="zakQ1ChatArea1">
        <div class="person">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading1">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
            <div v-show="zakChatText1"> 物件の場所はどちらになりますか？</div>
        </div>
    </div>

    <div class="chatMessage-Question chatMessage-Question03" v-if="status === 10">
    <template v-if="areaBox">
      <label id="btnBox" class="Question-inner02" v-for="area in areas">
          <input type="radio" name="btn" :value="area.id" v-model="selectedAreaId">
          <span class="QuestionText QuestionText_4" v-html='area.name'></span>
      </label>
    </template>
    <template v-if="areaBox2">
      <label id="btnBox" class="Question-inner02" v-for="pref in filteredPref" v-on:click="question()">
          <input type="radio" name="btn" :value="pref.id" v-model="selectedPrefId">
          <span class="QuestionText QuestionText_4" v-html='pref.name'></span>
      </label>
    </template>
    </div>
    <!---物件の場所はどちらになりますか？ANSWER -->
    <div class="chatMessage-User" v-show="chatBox">
        <div class="person hidden">
        </div>
        <div class="chatText">
            <div class="loading" v-show="zakLoading3">
                <div class="load-item"></div>
                <div class="load-item"></div>
                <div class="load-item"></div>
            </div>
                <div v-for="answers in filteredAnswer">{{ answers.answer }}</div>
            <div class="chatText__already-read" v-show="zakReadq10">既読</div>
        </div>
    </div>
  </div>
  `,
  props: ['zakReadq9', 'sec'],
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
      zakReadq10: false,
      selectedAreaId: 0,
      selectedPrefId: 0,
      areaBox: true,
      areaBox2: true,
      areas: [
        { "id": 1, "name": "北海道・東北" },
        { "id": 2, "name": "関東" },
        { "id": 3, "name": "北陸・甲信越" },
        { "id": 4, "name": "東海" },
        { "id": 5, "name": "関西" },
        { "id": 6, "name": "中国" },
        { "id": 7, "name": "四国" },
        { "id": 8, "name": "九州・沖縄" },
      ],
      prefs: [
        { "prefId": 1, "id": 1, "name": "北海道", "answer": "北海道です。"},
        { "prefId": 1, "id": 2, "name": "青森県", "answer": "青森県です。"},
        { "prefId": 1, "id": 3, "name": "岩手県", "answer": "岩手県です。"},
        { "prefId": 1, "id": 4, "name": "宮城県", "answer": "宮城県です。"},
        { "prefId": 1, "id": 5, "name": "秋田県", "answer": "秋田県です。"},
        { "prefId": 1, "id": 6, "name": "山形県", "answer": "山形県です。"},
        { "prefId": 1, "id": 7, "name": "福島県", "answer": "福島県です。"},
      
        { "prefId": 2, "id": 1, "name": "茨城県", "answer": "茨城県です。" },
        { "prefId": 2, "id": 2, "name": "栃木県", "answer": "栃木県です。" },
        { "prefId": 2, "id": 3, "name": "群馬県", "answer": "群馬県です。" },
        { "prefId": 2, "id": 4, "name": "埼玉県", "answer": "埼玉県です。" },
        { "prefId": 2, "id": 5, "name": "千葉県", "answer": "千葉県です。" },
        { "prefId": 2, "id": 6, "name": "東京都", "answer": "東京都です。" },
        { "prefId": 2, "id": 7, "name": "神奈川県", "answer": "神奈川県です。" },
      
        { "prefId": 3, "id": 1, "name": "新潟県", "answer": "新潟県です。"},
        { "prefId": 3, "id": 2, "name": "富山県", "answer": "富山県です。"},
        { "prefId": 3, "id": 3, "name": "石川県", "answer": "石川県です。"},
        { "prefId": 3, "id": 4, "name": "福井県", "answer": "福井県です。"},
        { "prefId": 3, "id": 5, "name": "山梨県", "answer": "山梨県です。"},
        { "prefId": 3, "id": 6, "name": "長野県", "answer": "長野県です。"},
      
        { "prefId": 4, "id": 1, "name": "岐阜県", "answer": "岐阜県です。"},
        { "prefId": 4, "id": 2, "name": "静岡県", "answer": "静岡県です。"},
        { "prefId": 4, "id": 3, "name": "愛知県", "answer": "愛知県です。"},
        { "prefId": 4, "id": 4, "name": "三重県", "answer": "三重県です。"},
      
        { "prefId": 5, "id": 1, "name": "滋賀県", "answer": "滋賀県です。"},
        { "prefId": 5, "id": 2, "name": "京都府", "answer": "京都府です。"},
        { "prefId": 5, "id": 3, "name": "大阪府", "answer": "大阪府です。"},
        { "prefId": 5, "id": 4, "name": "兵庫県", "answer": "兵庫県です。"},
        { "prefId": 5, "id": 5, "name": "奈良県", "answer": "奈良県です。"},
        { "prefId": 5, "id": 6, "name": "和歌山県", "answer": "和歌山県です。"},
      
        { "prefId": 6, "id": 1, "name": "鳥取県", "answer": "鳥取県です。"},
        { "prefId": 6, "id": 2, "name": "島根県", "answer": "島根県です。"},
        { "prefId": 6, "id": 3, "name": "岡山県", "answer": "岡山県です。"},
        { "prefId": 6, "id": 4, "name": "広島県", "answer": "広島県です。"},
        { "prefId": 6, "id": 5, "name": "山口県", "answer": "山口県です。"},
      
        { "prefId": 7, "id": 1, "name": "香川県", "answer": "香川県です。"},
        { "prefId": 7, "id": 2, "name": "徳島県", "answer": "徳島県です。"},
        { "prefId": 7, "id": 3, "name": "愛媛県", "answer": "愛媛県です。"},
        { "prefId": 7, "id": 4, "name": "高知県", "answer": "高知県です。"},
      
        { "prefId": 8, "id": 1, "name": "福岡県", "answer": "福岡県です。"},
        { "prefId": 8, "id": 2, "name": "大分県", "answer": "大分県です。"},
        { "prefId": 8, "id": 3, "name": "宮城県", "answer": "宮城県です。"},
        { "prefId": 8, "id": 4, "name": "佐賀県", "answer": "佐賀県です。"},
        { "prefId": 8, "id": 5, "name": "熊本県", "answer": "熊本県です。"},
        { "prefId": 8, "id": 6, "name": "長崎県", "answer": "長崎県です。"},
        { "prefId": 8, "id": 7, "name": "鹿児島県", "answer": "鹿児島県です。"},
        { "prefId": 8, "id": 8, "name": "沖縄県", "answer": "沖縄県です。"},
      ],
    }
  },
  computed: {
    newZakReadq9: {
      get() {
        return this.zakReadq9;
      },
      set(newVal9) {
        this.$emit('change', newVal9);
      }
    },
    filteredPref() {
      let filteredPref = [];
      let self = this;
      for (let i = 0; i < self.prefs.length; i++) {
        let pref = self.prefs[i];
        if (pref.prefId === self.selectedAreaId) {
          self.areaBox = false;
          filteredPref.push(pref);
        }
      }
      return filteredPref;
    },
    filteredAnswer: function () {
      let filteredAnswer = [];
      let newArray = [];
      for (let i = 0; i < this.filteredPref.length; i++) {
        let answer = this.filteredPref[i];
        filteredAnswer.push(answer);
      }
      for (let j = 0; j < filteredAnswer.length; j++) {
        let array = filteredAnswer[j];
        //if(array.id === this.)
        console.log(this.selectedPrefId)
        //newArray.push(array);
      }
      return filteredAnswer;
    }
  },
  methods: {
    zakShowchatQ1: function () {
      let self = this;
      self.zakQ1ChatArea1 = true;
      self.newZakReadq9 = true;
      setTimeout(function () {
        (self.zakChatText1 = true), (self.zakLoading1 = false);
        setTimeout(function () {
          scrollBy({top: 200, behavior: 'smooth'});
          self.status = 10;
        }, self.sec);
      }, self.sec);
    },

    question: function () {
      for (let i = 0; i < this.prefs.length; i++) {
        this.chatBox = true,
          this.status = 0;
      }

    }

  },
})
