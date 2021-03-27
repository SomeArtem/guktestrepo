import Vue from 'vue'

const ProditemComponent=Vue.component('proditem',{    
    template:'#proditem-template',
    data: function(){
        return{
            priceSwitcher:false,
            isactive:true,
            count:1,
            mincount:1,
            rouble_path:`M28.109,29.658c5.173,0.578,10.357-0.979,14.355-4.312c4.172-4.748,5.151-11.509,2.499-17.246c-0.847-1.953-2.2-3.644-3.92-4.899c
            -1.813-1.204-3.872-1.991-6.026-2.303c-2.464-0.37-4.955-0.534-7.447-0.49H9.05v23.272H3.562 
            v5.781H9.05v5.977H3.562v5.781H9.05v8.378h6.467v-8.133h20.088v-5.781H15.517v-6.026H28.06H28.109z 
            M15.566,6.386h12.543 c2.019-0.074,4.04,0.074,6.026,0.441c1.673,0.442,3.132,1.467,4.116,2.891c1.062,1.539,
            1.611,3.373,1.568,5.242 c0.138,2.473-0.832,4.879-2.646,6.565c-2.601,1.812-5.76,2.645-8.917,2.352H15.517V6.386H15.566z`
        }       
    },

    props:{
        id:'',
        title:'',
        price:0,
        priceAlt:0,
        goldPrice:0,
        goldPriceAlt:0,
        unitFull:'',
        unitAlt:'',        
        primaryImageUrl:'',
        code:'',
        assocProducts:'',
        unit:'',
        unitRatio:'',
        unitAlt:'',
        unitRatioAlt:''        
    },
    methods:{
        IncreaseCountMethod:function(){
            this.count++
        },
        DecreaseCountMethod:function(){
            this.count>this.mincount ? this.count-- : this.count=this.mincount
        },
        AddToCartMethod:function(){            
            const newCartPosition={
                prodId:this.id,
                prodQuantity:this.count
            }
            this.$emit('addtocartevent', newCartPosition)
            this.count=1
        },
        TypeNumInputMethod:function(val){            
            if (typeof val === 'string'){
                this.count = Number(val.replace(/[A-Za-zА-Яа-яЁё]/, '').trim())
            }else{
                this.count = val
            }            
        }        
    }
})

export default ProditemComponent