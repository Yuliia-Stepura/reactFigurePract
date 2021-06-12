import React from 'react';
import Svg, { Circle, Rect, Ellipse, ForeignObject } from 'react-native-svg';
import { Text, View, ScrollView, StyleSheet, TextInput, Button, CheckBox, ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import AppLoader from './assets/AppLoader';
import setValue from './components/setValue';
class Calculate extends React.Component {
  constructor(props) {
    super();
    this.state = { 
     parallelepiped: { a: 70, b: 35, angle: 15, h: 0, area: 0, }, 
     circle: { r: 30, l: 0, area: 0,},
     ellipse: { rx: 40, ry: 20, l: 0, area: 0,},
     square: { a: 45.5, diagonal: 0, area: 0, },
     rectangle: { a: 70, b: 35, diagonal: 0, area: 0, },
     triangle: { a: 40, b: 80.6, c: 90, area: 0, }, 
     calculate: false,
    };
  }
 
  setValue = async (text,searchItem,shape,) => {
   this.state.calculate == true ? this.calculateFigures() : null;
    if (shape == 'rectangle' && searchItem == 'a') {
        await this.setState((prevState) => ({
          rectangle: {
            ...prevState.rectangle,
            a: text,
          },
        }));
      }
   if (shape == 'parallelepiped' && searchItem == 'b') {
      await this.setState((prevState) => ({
        parallelepiped: {
          ...prevState.parallelepiped,
          b: text,
        },
      }));
    }
    if (shape == 'parallelepiped' && searchItem == 'angle') {
      await this.setState((prevState) => ({
        parallelepiped: {
          ...prevState.parallelepiped,
          angle: text,
        },
      }));
    }
    if (shape == 'circle' && searchItem == 'r') {
      await this.setState((prevState) => ({
        circle: {
          ...prevState.circle,
          r: text,
        },
      }));
    }
    if (shape == 'ellipse' && searchItem == 'rx') {
      await this.setState((figureState) => ({
        ellipse: {
        ...figureState.ellipse,
        rx: text,
        },
      }));
    }
    if (shape == 'ellipse' && searchItem == 'ry') {
      await this.setState((prevState) => ({
        ellipse: {
        ...prevState.ellipse,
        ry: text,
        },
      }));
    }
    if (shape == 'square' && searchItem == 'a') {
      await this.setState({
        square: {
          ...this.state.square,
          a: text,
        },
      });
    }
    if (shape == 'rectangle' && searchItem == 'b') {
      await this.setState((prevState) => ({
        rectangle: {
          ...prevState.rectangle,
          b: text,
        },
      }));
    }
    if (shape == 'parallelepiped' && searchItem == 'a') {
      await this.setState((prevState) => ({
        parallelepiped: {
          ...prevState.parallelepiped,
          a: text,
        },
      }));
    }
    if (shape == 'triangle' && searchItem == 'a') {
      await this.setState((prevState) => ({
        triangle: {
          ...prevState.triangle,
          a: text,
        },
      }));
    }
    if (shape == 'triangle' && searchItem == 'b') {
      await this.setState((prevState) => ({
        triangle: {
          ...prevState.triangle,
          b: text,
        },
      }));
    }
   else { <AppLoader/>}
  };


  calculateFigures = async() => {
    await this.setState({
      circle: {
        r: this.state.circle.r,
        l: (2* Math.PI * this.state.circle.r).toFixed(1),
        area: (Math.PI * Math.pow(this.state.circle.r, 2)).toFixed(1)
      },
      ellipse: {
        rx: this.state.ellipse.rx,
        ry: this.state.ellipse.ry,
        l: ( Math.PI *
          (this.state.ellipse.rx + this.state.ellipse.ry)).toFixed(1), 
        area: ( Math.PI *
          this.state.ellipse.rx *
          this.state.ellipse.ry).toFixed(1)
      },
      square: {
        a: this.state.square.a,
        diagonal: (this.state.square.a * Math.sqrt(2)).toFixed(1),
        area: Math.pow(this.state.square.a, 2).toFixed(1),
      },
      rectangle: {
        a: this.state.rectangle.a,
        b: this.state.rectangle.b,
        diagonal: Math.sqrt(
          Math.pow(this.state.rectangle.a, 2) +
          Math.pow(this.state.rectangle.b, 2)).toFixed(1),
        area: (this.state.rectangle.a * this.state.rectangle.b).toFixed(1)
      },
      parallelepiped: {
        a: this.state.parallelepiped.a,
        b: this.state.parallelepiped.b,
        angle: this.state.parallelepiped.angle,
        h: Math.abs(
          (this.state.parallelepiped.a * 
          Math.sin(this.state.parallelepiped.angle)).toFixed(1)),
        area: (
          this.state.parallelepiped.a *
          this.state.parallelepiped.b *
          Math.sin((Math.PI * this.state.parallelepiped.angle)/180)).toFixed(1)
      },
      triangle: {
        a: this.state.triangle.a,
        b: this.state.triangle.b,
        c: Math.sqrt(Math.pow(this.state.triangle.a, 2)+
          Math.pow(this.state.triangle.b, 2)).toFixed(1),
        area: (
          (this.state.triangle.a * this.state.triangle.b)/2).toFixed(1),
      }, });
  };


  render() {
    return (
      <ImageBackground 
      source={require('./assets/bg1.jpg')} 
      style={styles.backgroundImage}>
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={{ flex: 1 }}
          automaticallyAdjustContentInset>
          <View style={styles.container}>
            <View style={styles.svgView}>
              <Svg width="100%" height="18%" >
                <ForeignObject 
                x="1%"
                width={300} 
                height={300} >
                  <View
                    style={{
                      width: `${this.state.parallelepiped.a}px`,
                      height: `${this.state.parallelepiped.b}px`,
                      borderWidth: 3,
                      margin: 20,
                      transform: [
                        { skewX: `-${this.state.parallelepiped.angle}deg` },
                      ],
                    }}/>
                </ForeignObject>
              </Svg>
              <View></View>
              <Svg width="100%" height="15%">
                <Circle
                  cx="65"
                  cy="50"
                  r={this.state.circle.r}
                  stroke="black"
                  strokeWidth="3"
                   fill="transparent"/>
              </Svg>
              <Svg width="100%" height="17%">
                <Ellipse
                  cx="55"
                  cy="70"
                  rx={this.state.ellipse.rx}
                  ry={this.state.ellipse.ry}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3" />
              </Svg>
              <Svg width="100%" height="17%">
                <Rect
                  x="25%"
                  y="40%"
                  width={this.state.square.a}
                  height={this.state.square.a}
                   fill="transparent" 
                   stroke="black"
                  strokeWidth="3"/>
              </Svg>
              <Svg width="100%" height="15%">
                <Rect
                  x="15%"
                  y="50%"
                  width={this.state.rectangle.a}
                  height={this.state.rectangle.b}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="3"/>
              </Svg> 
              <Svg width="100%" height="17%">
                <ForeignObject x="20%" y="60%" width={300} height={300} >
                  <View
                    style={{
                      width: 0,
                      height: 0,
                      borderTopWidth: `${this.state.triangle.a}px`,
                      borderBottomWidth: 0,
                      borderRightWidth: 0,
                      borderLeftWidth: `${this.state.triangle.b}px`,
                      borderTopColor: 'transparent',
                      borderLeftColor: 'black',
                    }}/>
                </ForeignObject>
              </Svg>
            </View>

            <View style={[styles.textView,{paddingBottom:"19%"}]}>
               <View style={styles.figuresBlock}>
                <Text style={styles.name}>Паралелепіпед</Text>
                <View style={styles.textBlock}>
                  <Text style={styles.text}>Сторона A: </Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'parallelepiped', 'a');
                    }}
                    value={this.state.parallelepiped.a}
                  />
                  <Text style={styles.text}>Сторона B: </Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'parallelepiped', 'b');
                    }}
                    value={this.state.parallelepiped.b}
                  />
                  
                  <Text style={styles.text}>  Кут а: </Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'parallelepiped', 'angle');
                    }}
                    value={this.state.parallelepiped.angle}
                  />
                  <Text style={styles.text}>
                    Висота h: {' '}
                    {this.state.parallelepiped.h == 0
                      ? '0' : this.state.parallelepiped.h}{' '}
                    {'\n'} 
                    Площа S: {' '}
                    {this.state.parallelepiped.area == 0
                      ? '0': this.state.parallelepiped.area}
                  </Text>
                </View>
              </View>
              <View style={styles.figuresBlock}>
                <Text style={styles.name}>Круг</Text>
                <View style={styles.textBlock}>
                  <Text style={styles.text}>Радіус R: </Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'circle', 'r');
                    }}
                    value={this.state.circle.r}
                  />
                </View>
                <View style={styles.textBlock}>
                  <Text style={styles.text}>
                    Довжина L: {' '}
                      {this.state.circle.l > 0 ? this.state.circle.l:'0'}{' '}
                    {'\n'}
                    Площа S: {' '}
                    {this.state.circle.area > 0
                      ? this.state.circle.area : '0'}
                  </Text>
                </View>
              </View>

              <View style={styles.figuresBlock}>
                <Text style={styles.name}>Еліпс</Text>
                <View style={styles.textBlock}>
                  <Text style={styles.text}>Гориз. радіус R:</Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'ellipse', 'rx');
                    }}
                    value={this.state.ellipse.rx}
                  />
                  <Text style={styles.text}>Верт. радіус R: </Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'ellipse', 'ry');
                    }}
                    value={this.state.ellipse.ry}
                  />
                  <Text style={styles.text}>
                    Довжина L: {' '}
                      {this.state.ellipse.l == 0
                      ? '0': this.state.ellipse.l}{' '}
                    {'\n'}
                    Площа S: {' '}
                      {this.state.ellipse.area == 0
                      ? '0': this.state.ellipse.area}
                  </Text>
                </View>
              </View>

           <View style={styles.figuresBlock}>
                <Text style={styles.name}>Квадрат</Text>
                <View style={styles.textBlock}>
                  <Text style={styles.text}>Сторона A:</Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'square', 'a');
                    }}
                    value={this.state.square.a}
                  />
                </View>
                <View style={styles.textBlock}>
                  <Text style={styles.text}>
                    Діагональ d:{' '}
                      {this.state.square.diagonal > 0
                      ? this.state.square.diagonal : '0'}{' '}
                    {'\n'}
                    Площа S: {' '}
                      {this.state.square.area == 0
                      ? '0': this.state.square.area}
                  </Text>
                </View>
              </View>

              <View style={styles.figuresBlock}>
                <Text style={styles.name}>Прямокутник</Text>
                <View style={styles.textBlock}>
                  <Text style={styles.text}>Сторона A: </Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'rectangle', 'a');
                    }}
                    value={this.state.rectangle.a}
                  />
                  <Text style={styles.text}>Сторона B: </Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'rectangle', 'b');
                    }}
                    value={this.state.rectangle.b}
                  />
                  <Text style={styles.text}>
                    Діагональ d: {' '}
                      {this.state.rectangle.diagonal == 0
                      ? '0': this.state.rectangle.diagonal}{' '}
                    {"\n"}
                    Площа S: {' '}
                      {this.state.rectangle.area == 0
                      ? '-': this.state.rectangle.area}
                  </Text>
                </View>
              </View>
             
              <View style={styles.figuresBlock}>
                <Text style={styles.name}>Прямокутний трикутник</Text>
                <View style={styles.textBlock}>
                  <Text style={styles.text}>Сторона A:</Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'triangle', 'a');
                    }}
                    value={this.state.triangle.a}
                  />
                  <Text style={styles.text}> Сторона B: </Text>
                  <TextInput
                    style={styles.numberInput}
                    onChangeText={(text) => {
                      this.setValue(text, 'triangle', 'b');
                    }}
                    value={this.state.triangle.b}
                  />
                  <Text style={styles.text}>
                   Сторона С: {' '}
                    {this.state.triangle.c == 0
                      ? this.state.triangle.c : this.state.triangle.c}{' '}
                    {'\n'}
                   Площа S: {' '}
                      {this.state.triangle.area == 0
                      ? '0': this.state.triangle.area}
                   
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View  style={styles.calculateButtonBlock}>
            <View>
              <Text>{'\n'}{'\n'}</Text>
            </View>
            <Button 
            onPress={() => {
                  this.calculateFigures();
                }}
                title="Порахувати велечини"
                accessibilityLabel="Зробити обрахунок усіх значень"
                color="#249029"
              />
              <Text style={styles.text}>
              {'\n'}
              Обрахувавати автоматично
              <CheckBox
                value={this.state.calculate}
                style={[styles.checkbox]}
                onValueChange={(value) =>{
                  this.setState({calculate: value})
              }}/></Text>
              </View>
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }
}

export default Calculate;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
  },
  mainContainer: {
    padding: 1,  
    height: '100%',
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: '100%', 
    padding: 4,
  },
  figuresBlock: {
    marginTop: 2,
    marginBottom: 1,
    height: '18.5%',
    borderWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'center',
  },
  svgView: {
    flex: 3,
    height: '100%',
  },
  textBlock: {
    marginVertical: 2,
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'center',
  },
  textView: {
    flex: 4,
    height: '100%',
    paddingLeft: 4,
  },
  numberInput: {
    textAlign: 'center',
    width: '30%',
    borderWidth: 2,
    borderColor: '#33BF4A',
    borderRadius: 8,
    paddingBottom: 2,
    fontSize: 14,
  },
  text: {
    marginRight: 4,
    fontSize: 14,
    textAlign: 'center',
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 6,
    fontSize: 18, 
  },
  calculateButtonBlock: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  // calculateButton: {
  // color:"#249029"
  // },
  checkbox: { 
    alignSelf: 'center', 
    width:20,
    height:20, 
    marginLeft:5,
    top:5,
    },
  svgBorder: {
    borderColor: "black",
    borderWidth: 3,
    },
});
