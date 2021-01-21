import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {ThemeProvider} from 'styled-components';
// import reportWebVitals from './core';
import {Card, Content, Grid, Title} from "components";
import {GlobalStyles, theme} from "styles";
import {configureStore} from 'core'

const store = configureStore();

render(
    <React.StrictMode>
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Provider store={store}>
                    <Content data-cy={"content"}>
                        <Title data-cy={"title"}>Sudoku</Title>
                        <Card data-cy={"card"}>
                            <Grid/>
                        </Card>
                    </Content>
                </Provider>
            </ThemeProvider>
        </>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
