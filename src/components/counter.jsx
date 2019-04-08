import  React, {Component} from 'react';

export default class  Counter extends Component{
    state={
        count:1,
        imageUrl : 'https://picsum.photos/200'
    };

    render() {

        return (
        <div>
            <span className= {this.getBadgeColor()} > {this.formatCount()}</span>
            <button className= "btn btn-secondary btn-sm" >Increment</button>
        </div>
    );
    }

    getBadgeColor() {
        let classes = "badge m-2 badge-";
        if (this.state.count === 0) {
            classes += "warning";
        } else {
            classes += "primary";
        }
        return classes;
    }

    formatCount(){
        if(this.state.count===0){
            return "Zero"
        }
        else return this.state.count
    }
}

