import React from 'react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const Widget = () => {
  return <div className='fixed bottom-4 right-4 z-50'>
    <Button className="rounded-full shadow-lg hover:scale-105">Feedback</Button>
    <div>
      <h3>Send us your feedback</h3>
      <form>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder='Enter your name' />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder='Enter your email' />
        </div>
        <div>
          <Label htmlFor="feedback">Feedback</Label>
          <Textarea id="feedback" placeholder='Tell us what you think' />
        </div>
      </form>
    </div>
  </div>
}

export default Widget