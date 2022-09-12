import React from 'react';
import './index.css';
import {renderTree} from "./render";
import {subscribe} from "./redux/state";


subscribe(renderTree)
renderTree()


