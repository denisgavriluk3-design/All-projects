import { Button } from 'bootstrap'
import React, { Component } from 'react'


function App3() {
    let content = 'pres for button'

    console.log('App Component Render')

    function handleClik(type) {
        console.log('button clicked', type)
        content = type
    }

    return (
        <div>
            <header/>
            <main>
                <secction>
                    <h3>our way to teach</h3>

                    <ul>
                        <WayToTeach
                        title={ways[0].title}
                        description={ways[0].description}
                        />
                        <WayToTeach {...ways[1]}/>
                        <WayToTeach {...ways[2]}/>
                        <WayToTeach {...ways[3]}/>
                    </ul>
                </secction>
                <section>
                    <h3>Hello World</h3>

                    <Button onClick={() => handleClick('way')}>podhod</Button>
                    <Button onClick={() => handleClick('easy')}></Button>
                    <Button onClick={() => handleClick('program')}>podhod</Button>

                    <p>{content}</p>
                </section>
            </main>
        </div>
    )
}



export default App3