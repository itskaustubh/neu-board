import React, { Component } from 'react'
import Avatar from 'react-nice-avatar'
import './CustomAvatar.scss'
import AvatarAttribute from './AvatarAttribute'
import { connect } from 'react-redux'

export class CustomAvatar extends Component {
    constructor(props){
        super()
        this.state = {...props.avatar,
                openHairColorPicker : false,
                openShirtColorPicker : false,
                openFaceColorPicker : false,
                showRandomStylesTooltip : true,
        }
        this.styleOpts = {
            sex : ['man', 'woman'],
            faceColor : {'#F9C9B6' : 'Light','#AC6651' : 'Dark'},
            earSize : ['small','big'],
            hairStyleArray : ['normal','thick','mohawk','womanLong','womanShort'],
            hairStyle : {'normal':'Normal', 'thick':'Thick', 'mohawk':'Mohowk', 'womanLong':'Woman Long', 'womanShort':'Woman Short'},
            eyeStyle : ['circle', 'oval', 'smile'],
            glassesStyle : ['none', 'round', 'square'],
            noseStyle : ['short', 'long', 'round'],
            mouthStyle : ['laugh', 'smile', 'peace'],
            shirtStyle : ['hoody', 'short', 'polo']
        }
    }

    handleClick = (e) => {
        const [target,parentClass] = [e.target.id,e.currentTarget.id]
        // console.log(parentClass)
        // console.log(target)
        if(target !== parentClass){
            this.setState({[parentClass] : target }, function ()  {
                // console.log(target)
            })
        }
    }

    capitalize = (letter) => {
        return letter && letter[0].toUpperCase() + letter.slice(1);
    }

    Option(props) {
        const {stateValue, id,name} = props 
        // console.log(stateValue,id)
        return (
                <p id={id} className={`opt ${stateValue === id ? 'active' : ''}`} >{name}</p>
        )
    }

    randomVal = (array) => array[Math.floor(Math.random() * array.length)];

    onChangeColor = function (type,color) {
        // console.log(e,type)
        // console.log(type,color)
        // console.log(type.hex)   
        this.setState({[type] : color})
    }

    toggleColorPicker = (e) => {
        const target = e.target.id
        this.setState({[target] : !(this.state[target])})
    }

    closeColorPicker = (e) => {
        // console.log(e)
        if((this.state.openHairColorPicker || this.state.openShirtColorPicker || this.state.openFaceColorPicker)){
            // if(e.type === 'scroll'){
            //     this.setState({openHairColorPicker: false, openShirtColorPicker: false, openFaceColorPicker : false})
            // }else 
            if(e.type === 'click' && !(e.target.className.includes('react-colorful'))){
                console.log('closing all color pickers')
                this.setState({openHairColorPicker: false, openShirtColorPicker: false, openFaceColorPicker : false})
            }
        }
    }

    handleBlur = (e) => {
        console.log('blur')
    }

    randomVal   = (array) => array[Math.floor(Math.random() * array.length)];
    // https://stackoverflow.com/a/5092872
    randomColor = () => "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

    generateRandomAvatar = () => {
        if(this.state.showRandomStylesTooltip) {
            this.setState({showRandomStylesTooltip : false})
        }
        this.setState({
            sex : this.randomVal(this.styleOpts.sex),
            faceColor : this.randomVal(this.styleOpts.faceColor),
            earSize : this.randomVal(this.styleOpts.earSize),
            hairColor : this.randomColor(),
            hairStyle : this.randomVal(this.styleOpts.hairStyleArray),
            eyeStyle : this.randomVal(this.styleOpts.eyeStyle),
            glassesStyle : this.randomVal(this.styleOpts.glassesStyle),
            noseStyle : this.randomVal(this.styleOpts.noseStyle),
            mouthStyle : this.randomVal(this.styleOpts.mouthStyle),
            shirtStyle : this.randomVal(this.styleOpts.shirtStyle),
            shirtColor : this.randomColor(),
        })
    }

    render() {
        // console.log(this.styleOpts.sex)
        const { sex,faceColor,earSize,hairColor,hairStyle,eyeStyle,
            glassesStyle,noseStyle,mouthStyle,shirtStyle,shirtColor,openHairColorPicker,
                openShirtColorPicker,openFaceColorPicker,showRandomStylesTooltip} = this.state
        return (
            <div className='custom-avatar-scaffold'>
                <div className='custom-avatar-container'>
                    {
                        (showRandomStylesTooltip) ? (<p style={{textAlign : 'center',fontSize:'13px'}}>Click avatar to generate random styles</p>) : null
                    }    
                    <div className='avatar' onClick={this.generateRandomAvatar}>
                        <Avatar  style={{ width: '8rem', height: '8rem' }} 
                            sex={sex} faceColor={faceColor} earSize={earSize} hairColor={hairColor} hairStyle={hairStyle} 
                                eyeStyle={eyeStyle} glassesStyle={glassesStyle} noseStyle={noseStyle} mouthStyle={mouthStyle} 
                                    shirtStyle={shirtStyle} shirtColor={shirtColor} bgColor='transparent'/>
                    </div>
                    <div className="info" onClick={this.closeColorPicker}>
                        {/* <AvatarAttribute title='SEX' id='sex' styleOpts={this.styleOpts['sex']} stateValue={sex} onClick={this.handleClick}/> */}
                        <AvatarAttribute title='FACE' id='faceColor' styleOpts={Object.keys(this.styleOpts.faceColor)} optsObj={this.styleOpts.faceColor} stateValue={faceColor} onClick={this.handleClick}
                            pickerID = 'openFaceColorPicker' onPickerClick={this.toggleColorPicker} pickerType={openFaceColorPicker} colorValue={faceColor} onColorChange={this.onChangeColor.bind(this,'faceColor')}
                        />
                        <AvatarAttribute title='HAIR' id='hairStyle' styleOpts={Object.keys(this.styleOpts.hairStyle)} optsObj={this.styleOpts.hairStyle} stateValue={hairStyle} onClick={this.handleClick}
                            pickerID = 'openHairColorPicker' onPickerClick={this.toggleColorPicker} pickerType={openHairColorPicker} colorValue={hairColor} onColorChange={this.onChangeColor.bind(this,'hairColor')}
                        />
                        <AvatarAttribute title='EYES' id='eyeStyle' styleOpts={this.styleOpts['eyeStyle']} stateValue={eyeStyle} onClick={this.handleClick}/>
                        <AvatarAttribute title='GLASSES' id='glassesStyle' styleOpts={this.styleOpts['glassesStyle']} stateValue={glassesStyle} onClick={this.handleClick}/>
                        <AvatarAttribute title='EAR' id='earSize' styleOpts={this.styleOpts['earSize']} stateValue={earSize} onClick={this.handleClick}/>
                        <AvatarAttribute title='NOSE' id='noseStyle' styleOpts={this.styleOpts['noseStyle']} stateValue={noseStyle} onClick={this.handleClick}/>
                        <AvatarAttribute title='MOUTH' id='mouthStyle' styleOpts={this.styleOpts['mouthStyle']} stateValue={mouthStyle} onClick={this.handleClick}/>
                        <AvatarAttribute title='SHIRT' id='shirtStyle' styleOpts={this.styleOpts['shirtStyle']} stateValue={shirtStyle} onClick={this.handleClick}
                            pickerID = 'openShirtColorPicker' onPickerClick={this.toggleColorPicker} pickerType={openShirtColorPicker} colorValue={shirtColor} onColorChange={this.onChangeColor.bind(this,'shirtColor')}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        avatar : state.avatar.avatarStyle
    }
}

export default connect(mapStateToProps)(CustomAvatar)



// { <div className="field">
//     <p>HAIR</p>
//     <div className="colorPanelWrapper">
//         <img src={palette}  alt="Custom Color" className='icon-palette' id='openHairColorPicker'  onBlur={this.handleBlur} onClick={this.toggleColorPicker}/>
//         { openHairColorPicker ?  (<HexColorPicker className='colorPanel' id='hairColor' color={hairColor} onChange={this.onChangeColor.bind(this,'hairColor')}/>) : null }                                    
//     </div>
// </div>
// <div className="opts" id='hairStyle' onClick={this.handleClick}>
//     {Object.keys(this.styleOpts.hairStyle).map((style,index) => (
//         <this.Option key={index} id={style} name={this.capitalize(this.styleOpts.hairStyle[style])} stateValue={hairStyle}/>
//     ))}
// </div> }

// { <div className="field">
//     <p>SHIRT</p>
//     <div className="colorPanelWrapper">
//     <img src={palette}  alt="Custom Color" className='icon-palette' id='openShirtColorPicker' onClick={this.toggleColorPicker}/>
//     { openShirtColorPicker ?  (<HexColorPicker className='colorPanel' color={shirtColor} onChange={this.onChangeColor.bind(this,'shirtColor')}/>) : null }    
//         </div>
// </div>
// <div className="opts" id='shirtStyle' onClick={this.handleClick}>
//     {this.styleOpts['shirtStyle'].map((style,index) => (
//         <this.Option key={index} id={style} name={this.capitalize(style)} stateValue={shirtStyle}/>
//     ))}
// </div> }