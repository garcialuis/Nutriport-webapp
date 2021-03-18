import React from 'react'
import DailyActivitySummary from './DailyActivitySummary'
import FoodItemsPanel from './FoodItemsPanel'
import Header from './Header'

const NutriportApp = () => {
    return (
        <div>
            <Header />
            <DailyActivitySummary />
            <FoodItemsPanel />
        </div>
    )
}

export default NutriportApp
