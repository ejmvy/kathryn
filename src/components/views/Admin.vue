<template >
  <div class="adminBg" :class='{"greenBg": !userLoggedIn}'>
    <AdminLogin v-if='!userLoggedIn' @loggedIn='userLoggedIn = true'></AdminLogin>
    <div class='noteAppear'>
      <transition name='appear' :duration="{ enter: 800, leave: 800 }">
        <Notification v-if='showNotification' :type='notificationType' :message='notificationMessage'></Notification>
      </transition>
    </div>

    <AdminHeader v-if='userLoggedIn'></AdminHeader>

    <div class='adminPanelArea' v-if='userLoggedIn'>
      <div class='logoArea'>
        <div class='headerLogos'>
            <img @click='changeWindow(0)' class='headerLogo' src='../../assets/icons/pencil-green.png' />
            <div class='line'></div>
            <img @click='changeWindow(1)' class='headerLogo' src='../../assets/icons/file-green.png' />
            <div class='line'></div>
            <img @click='changeWindow(2)' class='headerLogo' src='../../assets/icons/list-green.png' />
        </div>
      </div>

      <div class='panelDisplay'>
          <div class='adminArea'>
              <transition :name="back ? 'slideback' : 'slide'">
                <AdminConfigPangel v-if='currentIndex === 0' key='1' @notificationPopup='showNotificationPopup'></AdminConfigPangel>
              </transition>
              <transition :name="back ? 'slideback' : 'slide'">
                <RecentOrderPanel v-if='currentIndex === 1' key='2'></RecentOrderPanel>
                  <!-- <div  class='panel'>Orders Area</div> -->
              </transition>
              <transition :name="back ? 'slideback' : 'slide'">
                  <div v-if='currentIndex === 2' key='3' class='panel'>History</div>
              </transition>
          </div>

      </div>
    </div>
    



  </div>
</template>

<script>
import AdminLogin from '../AdminPage/AdminLogin.vue';
import AdminHeader from '../AdminPage/AdminHeader.vue';
import AdminConfigPangel from '../AdminPage/AdminConfigPanel.vue';
import RecentOrderPanel from '../AdminPage/RecentOrderPanel.vue';
import Notification from '../../components/Designs/Notification.vue';
export default {
  data() {
    return {
      notificationType: '',
      showNotification: '',
      notificationMessage: '',
      userLoggedIn: false,
      openConfigPanel: true,
      openOrderPanel: false,
      openHistoryPanel: false,
      currentIndex: 0,
      back: false,
    };
  },
  methods: {
    changeWindow(newIdx) {
      if (this.currentIndex < newIdx) {
          console.log("HIGHER");
          this.back = false;
          console.log('BACK:' + this.back );
          this.currentIndex = newIdx;
      }
      else if (this.currentIndex > newIdx) {
          console.log("LOWER");
          this.back = true;
          
          this.currentIndex = newIdx;
      }
      console.log(`CURRENT idx: ${this.currentIndex}`);
    },
    showNotificationPopup(obj) {
      this.notificationType = obj.type;
      this.notificationMessage = obj.message;   
      this.showNotification = true;
      
      setTimeout(() => {
          this.showNotification = false;
        }, 2000)
    }
 
  },
  created() {
    fetch("http://localhost:3000/api/categories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.categoryList = data;
      });
  },
  components: {
    AdminLogin,
    AdminHeader,
    Notification,
    AdminConfigPangel,
    RecentOrderPanel
  },
};
</script>

<style scoped>
.adminBg {
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.greenBg {
  background: rgba(32, 72, 88, 0.7);
}

.adminPanelArea {
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}

.logoArea {
  width: 50%;
}

.headerLogos {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.headerLogo {
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

}

.headerLogo:hover {
    transform: scale(1.05);
    /* border-bottom: 2px solid rgba(32, 72, 88, 0.7); */
}


.line {
    width: 100px;
    height: 3px;
    background: rgba(32, 72, 88, 0.7);
    border-radius: 5px;
}

.panelDisplay {
    position: relative;
    top: 5%;
    width: 100%;
    height: 100%;
    margin-top: 60px;
    background: #f8f8f8;
    padding: 30px 20px 0 20px;
    display: flex;
    justify-content: center;
}

.adminArea {
    position: relative;
    overflow: hidden;
    /* top: 20%; */
    width: 95%;
    height: 100%;
    /* border: 2px solid red; */
    /* height: 100%; */
    
    
}

.panel {
    position: absolute;
    width: 100%;
    border: 2px solid blue;
    height: 100%;
}

.slide-leave-active,
.slide-enter-active {
    transition: 1s;
}
.slide-enter {
    transform: translate(100%, 0);
}
.slide-leave-to {
    transform: translate(-100%, 0);
}

.slideback-leave-active,
.slideback-enter-active {
    transition: 1s;
}
.slideback-enter {
    transform: translate(-100%, 0);
}
.slideback-leave-to {
    transform: translate(100%, 0);
}

</style>