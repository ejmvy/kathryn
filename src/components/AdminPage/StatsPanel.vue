<template>
    <div style='height: 100%'>
        <div class='orderPanel'>
            <h5 class='topHeader'>This Month</h5>
            <div class='statsArea'>
                <StatCard class='statCard' :cardObject="totalSales"></StatCard>
                <StatCard class='statCard' :cardObject="newUsers"></StatCard>
                <StatCard class='statCard' :cardObject="monthlyIncome"></StatCard>
            </div>

            <h5 class='padTop'>Popular Products this month</h5>
            <div class='statsArea'>
                <StatCard class='statCard' :cardObject="top1"></StatCard>
                <StatCard class='statCard' :cardObject="top2"></StatCard>
                <StatCard class='statCard' :cardObject="top3"></StatCard>
            </div>
        </div>
    </div>
</template>

<script>
import StatCard from '../Designs/StatCard.vue';
export default {
    data: () => ({
        totalProducts: '52',
        newCustomers: '16',

        totalSales: {
            cardTitle: 'Total Sales',
            cardFigure: '134',
            change: '3.48%',
            direction: 'down',
            icon: 'logos/cart.png'
        },
        newUsers: {
            cardTitle: 'New Users',
            cardFigure: '24',
            change: '7.52%',
            direction: 'up',
            icon: 'icons/userIcon.png'
        },
        monthlyIncome: {
            cardTitle: 'Monthly Income',
            cardFigure: '2,586',
            change: '4.22%',
            direction: 'up',
            icon: 'icons/dollar.png'
        },
        top1: {
            cardTitle: 'Bowl 4',
            cardFigure: '12',
            change: '1.89%',
            direction: 'up',
            icon: 'icons/star.png'
        },
        top2: {
            cardTitle: 'Mug 1',
            cardFigure: '7',
            change: '14.50%',
            direction: 'up',
            icon: 'icons/star.png'
        },
        top3: {
            cardTitle: 'Misc 3',
            cardFigure: '11',
            change: '53.20%',
            direction: 'up',
            icon: 'icons/star.png'
        }
    }),

    components: {
        StatCard
    }
}
</script>


<style scoped>

h5 {
    text-transform: uppercase;
    font-size: 13px;
    color: #666666;
}
.orderPanel {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
}

.statsArea {
    display: flex;
    width: 100%;
    /* border: 2px solid red; */
    justify-content: space-around;
}

.padTop {
    margin: 80px 0 40px 0;
}

.topHeader {
    margin: 0 0 40px 0;
}

@media screen and (max-width: 1000px) {
    .statsArea {
        /* flex-direction: column; */
        flex-wrap: wrap;

    }
    .statCard {
        margin-top: 30px;
    }
   
}


</style>