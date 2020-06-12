import React, { Component } from 'react';
import { ScrollView, Dimensions,View,SafeAreaView} from 'react-native';
import WebView from 'react-native-webview' ;

const htmlContent = `
<!DOCTYPE html>
<html>
<body>

<h1>My First JavaScript</h1>

<p>JavaScript can change the content of an HTML element:</p>

<button type="button" onclick="myFunction()">Click Me!</button>

<p id="demo">This is a demonstration.</p>

<script>
function myFunction() { 
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
</script>

</body>
</html>
`;



export class Mapscreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'#455a64' }}>
                <WebView
                        source={{
                        uri: 'http://fs.mis.kuas.edu.tw/~s1106137236/AR2VR/'
                        }}
                        style={{ marginTop: 20 }}
                    />
            </SafeAreaView>
          );
    }
}