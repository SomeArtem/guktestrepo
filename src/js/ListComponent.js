import ProditemComponent from './ItemComponent'
import Vue from 'vue'

const prodlistComponent=Vue.component('prodlist',{   
    template:'#prodlist-template',    
    components:{
        'proditem': ProditemComponent,
    },
    data: function(){
        return{
            //содержит массив продуктов   
            products:[],
            //содержит массив продуктов в "корзине"      
            cart:[],
        }
    },    
    props:{
        
    },
    computed:{
        
    },
    methods:{
        //Метод получения данных
        GetDataMethod:function(){
            fetch('data/products.json').then(response=>response.json()).then(prods=>(this.products = prods))            
        },


        //Метод добавления 
        AddtocartMethod:function(newItem){
            //ищем в корзине объект с id как у добавляемого элемента
            let itemExist = this.cart.find(cartItem => cartItem.prodId === newItem.prodId)            
            if (itemExist!=undefined) {// если такой товар уже есть в корзине                
                if (itemExist.prodQuantity+newItem.prodQuantity>0){//если результат добавления положительный                    
                    itemExist.prodQuantity+=newItem.prodQuantity
                }else{//если результат добавления не положительный                    
                    this.DeleteCartItem(newItem.prodId)
                }                
            }            
            else if (newItem.prodQuantity>0){//новый товар с положительным кол-вом                           
                this.cart.push(newItem)           
            }
            this.ShowCartMethod()                      
        },


        //Метод вывода корзины 
        ShowCartMethod:function(){
            //стрингбилдим корзину и выводим в консоль
            let strToShow='В корзине сейчас: \n'
            for(let i=0;i<this.cart.length;i++){
                strToShow+= this.cart[i].prodQuantity +'шт. '+ this.cart[i].prodId  +'\n'
            }
            console.log(strToShow+'\nНажмите C чтобы очистить корзину')
        },


        //Метод удаления элемента корзины 
        DeleteCartItem(id){
            this.cart=this.cart.filter(i=>i.prodId !==id)            
        },
        

        //Метод очистки корзины 
        ClearCartMethod(event){
            if(event.keyCode===67){
                this.cart=[]
                console.log('корзина пуста')
            }
        }        
    },
    created: function(){
        //когда создан элемент vue                
        this.GetDataMethod()

        let clear=this.ClearCartMethod
        window.addEventListener('keydown',function(event){
            clear(event)
        }); 
    }
})

export default prodlistComponent