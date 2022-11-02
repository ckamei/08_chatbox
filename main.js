let app = new Vue({
  el: "#app",
  data: {
    loading01: true,
    loading02: true,
    loading03: true,
    loading04: true,
    loading05: true,
    chatText01: false,
    chatText02: false,
    chatText03: false,
    chatText04: false,
    chatText05: false,
    chatArea02: true,
    chat02: false,
    chatArea04: false,
    chatArea05: false,
    isQuestion: false,
    read03: false,
    zakkuri: false,

    //zakkuriボタンを選んだ後の動き
    zakLoading06: true,
    zakLoading07: true,
    zakLoading11: true,
    zakLoading12: true,
    zakLoading13: true,
    zakChatText06: false,
    zakQ1ChatArea06: false,

    status: 0,
    //質問１
    zakkuriQ1A1: false,
    zakkuriQ1A2: false,
    zakkuriQ1A3: false,
    zakQ1Ans1: false,
    zakQ1Ans2: false,
    zakQ1Ans3: false,
    zakReadq1: false,
    chatBox: false,
    answer1: false,
    answer2: false,
    answer3: false,




    //-------未着手-------------//
    //shikkari
    skrLoading06: true,
    skrLoading07: true,
    skrLoading08: true,
    skrLoading09: true,


    isText06: false,
    isText07: false,
    isText08: false,
    isText09: false,

    isChat04: false,
    isChat05: false,
    isChat06: false,

    shikkari: false,
    imagePlace: false,
    visibleIcon01: false,
    visible01: false,
    visibleIcon02: false,
    visible02: false,
    sec: 300,
    isRead02: false,
    products: [
      { "id": 1, "text": "ユニットバス", "image": "images/unitbath.png", "answer": "ユニットバスです"},
      { "id": 2, "text": "タイル貼り", "image": "images/tile.png","answer": "タイル貼りです"},
      { "id": 3, "text": "わからない", "image": "images/idk.png","answer": "わからないです"},
    ],
  },
  created: async function () {
    await this.asyncFunc(this.showChat01());
    await this.asyncFunc(this.chatArea02);
    await this.asyncFunc(this.showChat02());
    await this.asyncFunc(this.showQuestion());
  },
  methods: {
    changeZakReadq1: function (newVal) {
      this.zakReadq1 = newVal;
    },
    showChat01: function () {
      return new Promise((resolve) => {
        let self = this;
        setTimeout(function () {
          (self.loading01 = false), (self.chatText01 = true);
          resolve();
        }, self.sec);
      });
    },
    showChat02: function () {
      return new Promise((resolve) => {
        let self = this;
        self.chat02 = true;
        setTimeout(function () {
          (self.loading02 = false), (self.chatText02 = true);
          resolve();
        }, self.sec);
      });
    },

    showQuestion: function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isQuestion = true;
          resolve();
        }, this.sec);
      });
    },

    //--------------ざっくり計算----------------------------
    calcZakkuri: function () {
      let self = this;
      setTimeout(function () {
        (self.zakkuri = true), self.showChat03();
      }, self.sec);
    },

    showChat03: function () {
      return new Promise((resolve) => {
        let self = this;
        self.isQuestion = false;
        self.read03 = false;
        self.zakkuri = true;
        setTimeout(function () {
          (self.loading03 = false), (self.chatText03 = true);
          setTimeout(function () {
            self.showChat04();
          }, self.sec);
        }, self.sec);
      });
    },

    showChat04: function () {
      return new Promise((resolve) => {
        let self = this;
        self.chatArea04 = true;
        self.read03 = true;
        setTimeout(function () {
          (self.loading04 = false), (self.chatText04 = true);
          setTimeout(function () {
            self.showChat05();
          }, self.sec);
          resolve();
        }, self.sec);
      });
    },
    //データをもとに、あなたの相場をざっくり計算します。
    showChat05: async function () {
      return new Promise((resolve) => {
        let self = this;
        self.chatArea05 = true;
        setTimeout(function () {
          (self.loading05 = false), (self.chatText05 = true);
          setTimeout(function () {
            self.zakShowChat06();
          }, self.sec);
        }, self.sec);
        resolve();
      });
    },



    //--------------しっかり計算----------------------------
    calcShikkari: function () {
      let self = this;
      setTimeout(function () {
        (self.shikkari = true), self.showChat06();
      }, self.sec);
    },

    showChat06: function () {
      return new Promise((resolve) => {
        let self = this;
        self.isQuestion = false;
        self.isRead = false;
        self.shikkari = true;
        setTimeout(function () {
          (self.skrLoading06 = false), (self.isText06 = true);
          setTimeout(function () {
            self.showChat07();
          }, self.sec);
        }, self.sec);
      });
    },

    showChat07: function () {
      return new Promise((resolve) => {
        let self = this;
        self.isChat04 = true;
        self.isRead02 = true;
        setTimeout(function () {
          (self.skrLoading07 = false), (self.isText07 = true);
          setTimeout(function () {
            self.showChat08();
          }, self.sec);
          resolve();
        }, self.sec);
      });
    },

    showChat08: function () {
      return new Promise((resolve) => {
        let self = this;
        self.isChat05 = true;
        setTimeout(function () {
          (self.skrLoading08 = false), (self.isText08 = true);
          resolve();
        }, self.sec);
      });
    },

    showImage: function () {
      if (this.isText08 === true && this.skrLoading08 === false) {
        return new Promise((resolve) => {
          let self = this;
          self.imagePlace = true;
          setTimeout(function () {
            self.visible01 = true;
            setTimeout(function () {
              (self.visibleIcon01 = true), self.showImage02();
            }, self.sec);
          }, self.sec);
        });
      }
    },

    showImage02: function () {
      return new Promise((resolve) => {
        let self = this;
        setTimeout(function () {
          self.visible02 = true;
          setTimeout(function () {
            self.visibleIcon02 = true;
            self.asyncChat();
          }, self.sec);
        }, self.sec);
      });
    },

    asyncChat: async function () {
      await this.asyncFunc(this.showImage02());
      await this.asyncFunc(this.showChat09());
    },

    showChat09: function () {
      return new Promise((resolve) => {
        let self = this;
        if (self.visibleIcon02 = true) {
          setTimeout(function () {
            self.isChat06 = true;
            setTimeout(function () {
              (self.skrLoading09 = false), (self.isText09 = true);
              setTimeout(function () {
                self.zakShowChat06();
              }, self.sec);
            }, self.sec);
          }, self.sec);
        }
        resolve();
      });
    },

    //-------------Question1:希望されるお風呂は、どのような形式ですか？-----------//

    
    //チャット部分
    zakShowChat06: function () {
      return new Promise((resolve) => {
        let self = this;
        self.zakQ1ChatArea06 = true;
        scrollBy({top: 200, behavior: 'smooth'});
        setTimeout(function () {
          self.zakLoading06 = false,
          self.zakChatText06 = true;
          setTimeout(function () {
            self.status = 1
            scrollBy({top: 200, behavior: 'smooth'});
          },self.sec)
          resolve();
        },self.sec)
      });
    },

    //button押したら、チャットが表示する関数
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
              self.zakLoading07 = false,
                self.answer1 = true,
                setTimeout(() => {
                  self.$refs.child.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (checkValue === "2") {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading07 = false,
                self.answer2 = true,
                setTimeout(() => {
                  self.$refs.child.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
      else if (checkValue === "3") {
        setTimeout(() => {
          self.chatBox = true,
            self.status = 0,
            setTimeout(() => {
              self.zakLoading07 = false,
                self.answer3 = true,
                setTimeout(() => {
                  self.$refs.child.zakShowchatQ1();
                }, self.sec);
            }, self.sec);
        },self.sec);
      }
    },
    //-------------end---Question1:希望されるお風呂は、どのような形式ですか？-----------//



    

    asyncFunc: function () {
      let self = this;
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, self.sec);
      });
    },
  },
  
});
