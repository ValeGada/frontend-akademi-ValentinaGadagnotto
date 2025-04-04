import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import styled from 'styled-components';

import App from './components/App';

const RootContainer = styled.div`
  width: 100%;
  heigth: 100%;
  margin: 0;
  padding: 0;
  top:0;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  background-size: contain;
  background-repeat: no-repeat;
  background: url(${(props)=>props.imgUrl});
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RootContainer imgUrl={'https://images.unsplash.com/photo-1678924587662-d8c63e57eb11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
        <Provider store={store}>
            <App /> 
        </Provider>
    </RootContainer>
);