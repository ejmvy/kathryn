<template>
    <div style='height: 100%'>
        <div class='orderPanel'>
            <h5>Orders History</h5>
            <div class='statsArea'>
                <div class='statBox'>
                    <h5>Total Products:</h5>
                    <p class='figure'>{{ totalProducts }}</p>
                </div>
                <div class='statBox'>
                    <h5>New Customers:</h5>
                    <p class='figure'>{{ newCustomers }}</p>
                </div>
                <div class='statBox'>
                    <h5>Monthly Income:</h5>
                    <p class='figure'>{{ monthlyIncome }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        totalProducts: '52',
        newCustomers: '16',
        monthlyIncome: '1,643',
    })
}
</script>


<style scoped>
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
    justify-content: space-between;
}

.statBox {
    border: 1px solid #ccc;
    box-shadow: 0px 0px 3px #ccc;
    padding: 10px 20px;
    background: white;
}

.figure {
    text-align: right;
    font-size: 35px;
    line-height: 0;
    padding-top: 10px;
    color: rgba(32, 72, 88, 0.7);
}
</style>