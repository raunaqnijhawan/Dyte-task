
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:['Option1','Option2' ,'Option3']
        };       
    }
    render(){
        const title='indecisive';
        const subtitle='keep hands on keyboard';
        
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={this.state.options}/>
                <AddOption/>

            </div>
        );
    }
}
class Header extends React. Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
}
}

class Action extends React.Component{
    handlePick(){
        alert('PickHandle')
    }
    render(){
        return(
            <div>
                <button 
                onClick={this.handlePick}
                disabled={! this.props.hasOptions}
                >
                    What should I do?</button>
                </div>

        );
    }
}
class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleremoveall=this.handleremoveall.bind(this);
    }
    handleremoveall(){
        alert('RemoveallHandle')
    }
    render(){
    return(
        <div>
            <button onClick={this.handleremoveall}>Remove all</button>
            {
            this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
                
            </div>
    );    
}

}
class Option extends React.Component{
    render(){
    return(
        <div>
            {this.props.optionText}
            </div>
    );    
}

}
class AddOption extends React.Component{
    handleAddOption(e){
    e.preventDefault();

    const option=e.target.elements.option.value;
    if(option){
        alert(option);
    }
}
    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
                
            </div>
        );
    }
}
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));