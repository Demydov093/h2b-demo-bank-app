import { Tabs } from 'expo-router'
import React from 'react'

const _Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
        name="index"
        options={{
            title: 'Dashboard',
            headerShown: false
        }}
        />
        <Tabs.Screen 
        name='refferal'
        options={{
            title: 'Refferal',
            headerShown: false
        }}/>
    </Tabs>
  )
}

export default _Layout