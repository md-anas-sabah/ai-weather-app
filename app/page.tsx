'use client'

import { Card , Divider , Subtitle , Text } from "@tremor/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394f68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
        <Card className="max-w-4xl mx-auto">
            <Text className="text-6xl font-bold text-center mb-10">WeatherNow</Text>
            <Subtitle className="text-xl text-center">Powered By OpenAI, Next.js 13.3, Tremor2.0</Subtitle>

            <Divider className="my-10"/>
            <Card className="bg-gradient-to-br from-[#394f68] to-[#183B7E]">

            </Card> 
        </Card>
    </div>
  )
}
