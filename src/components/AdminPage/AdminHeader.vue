<template>
    <header>
        <router-link to='/'>
            <img class='headerIcon' src='../../assets/icons/house.png' />
        </router-link>
        <p>Welcome Kathryn!</p>
        <img @click='$emit("logout")' class='headerIcon' src='../../assets/icons/close.png' />
    </header>


    

    
</template>

<script>
export default {
    data() {
        return {
            openConfigPanel: true,
            openOrderPanel: false,
            openHistoryPanel: false,
            currentIndex: 0,
            back: false,
        }
    },
    methods: {
        changeWindow(newIdx) {
            // console.log(`old idx: ${this.currentIndex}`);
            // console.log(`new idx: ${newIdx}`);
            if (this.currentIndex < newIdx) {
                console.log("HIGHER");
                this.back = true;
                console.log('BACK:' + this.back );
                this.currentIndex = newIdx;
            }
            else if (this.currentIndex > newIdx) {
                console.log("LOWER");
                this.back = false;
                
                this.currentIndex = newIdx;
            }
            console.log(`CURRENT idx: ${this.currentIndex}`);
        },
        openConfigWindow() {
            this.openOrderPanel = false;
            this.openHistoryPanel = false;

            (setTimeout(() => {
                this.openConfigPanel = true;
            }, 500))
        },
        openOrderWindow() {
            this.openConfigPanel = false;
            this.openHistoryPanel = false;

            setTimeout(() => {
                this.openOrderPanel = true;
            }, 500)
            
        },
        openHistoryWindow() {
            this.openConfigPanel = false;
            this.openOrderPanel = false;
            
            setTimeout(() => {
                this.openHistoryPanel = true;
            }, 500)
        },
    }
}
</script>


<style scoped>
    header {
        position: absolute;
        top: 0;
        width: 100%;
        background: rgba(32, 72, 88, 0.7);
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        align-items: center;
        margin-bottom: 30px;
    }

    .headerIcon {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    p {
        color: white;
        letter-spacing: 2.5px;
    }

    
    
</style>