import React, { Component } from 'react';
// import Card from 'react-bootstrap/Card';
// // import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

class Userlist extends Component {
    constructor(){
        super();
        this.state={
            data:false
        }
    }
    

    componentDidMount() {
        let url = "http://127.0.0.1:8000/api/userdetail/?format=json";
        fetch(url,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'content-Type':'application/json',
            }


        }).then((result)=>{
            result.json().then((resp)=>{
            
            this.setState({data:resp})

            })

        })  
    
    }

    render(){
        const data =this.state.data;

        console.log(data);
        return(
            <div>
                {
                    data ?
                    <div>
                        <ul>
                            {this.state.data.map(data =>
                                <li><a href="">{data.username}</a></li>)}
                        </ul>


                    </div>
                    :<p> Please wait ...</p>




                }



                
            </div>
            

                

                 


            
        )
    }
}
export default Userlist;