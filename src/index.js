import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import { CompOne, CompTwo } from "./components/ThirdComponent";

/**
 * Look this line, this is a simple component with alias name
 */
import { CompThree as CompThreeAlias} from "./components/ThirdComponent";

/**
 * Look this line, this is an error because the "FourthComponent" is a simple not a multiple
 */
// import { FourthComponent } from "./components/FourthComponent";

import FourthComponent from "./components/FourthComponent";

/**
 * Look this line. This is an example of file that have a default export and multiple common exports from tha same file 
 */
import FifthComponent, { CompOne as CompOneFromFifthComponent, CompTwo as CompTwoFromFifthComponent } from "./components/FifthComponent";

import SixthComponentFamily from "./components/SixthComponentFamily";

import SeventhComponent from "./components/SeventhComponent";

import EighthComponentFather from "./components/EighthComponentFather";

import NinethComponent from "./components/NinethComponent";

import TenthComponent from "./components/TenthComponent";

import EleventhComponent from "./components/EleventhComponent";

import TwelfthComponent from "./components/TwelfthComponent";

/** 
 * A Simple 'Hello World' pure text
*/
//ReactDOM.render('Hello World', document.getElementById('root')); 

/** 
 * A Simple 'Hello World' with html tags, "This is JSX"
*/
//ReactDOM.render(<h3>Hello World</h3>, document.getElementById('root')); 

/** 
 * A Simple 'Hello World' with html tags, "This is JSX"
*/
ReactDOM.render(<div>
    <FirstComponent />
    <SecondComponent title="Second Component" message="Example message" />
    <CompOne title="Third multiple component. I`m the first component of this set" />
    <CompTwo title="Third multiple component. I`m the second component of this set" />
    <CompThreeAlias title="Third multiple component. I`m the third component of this set" />
    <FourthComponent title="Fourth Component" message="Example message" />
    <FifthComponent title="Fourth Component" message="Example message" />
    <CompOneFromFifthComponent title="Fourth Component" message="Example message" />
    <CompTwoFromFifthComponent title="Fourth Component" message="Example message" />
    <SixthComponentFamily />
    <SeventhComponent />
    <EighthComponentFather />
    <NinethComponent />
    <TenthComponent number={100}/>
    <EleventhComponent number={200}/>
    <TwelfthComponent number={300} />
</div>, document.getElementById('root')); 
