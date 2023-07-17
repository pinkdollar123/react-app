import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserEntity from './components/User';
import Skills from './components/Skills';
import Wrapper from './components/Wrapper';
import Button from './components/Button';
import PackingList from './components/PackingList';
import DrinkList from './components/Drink';
import People from './components/People';
import Tea from './components/Tea';
import Clock from './components/Clock';
import Gallery from './components/Gallery';
import SimpleChat from './components/SimpleChat';
import Scorer from './components/Scorer';
import MessageLive from './components/MessageLive';
import OrderStatus from './components/OrderStatus';
import Canvas from './components/Canvas';
import AddArray from './components/AddArray';
import InsertArray from './components/InsertArray';
import Checklist from './components/Checklist';

function App() {
  
  return (
    <Wrapper>
      <SimpleChat />
      <MessageLive />
      <Clock />
      <UserEntity />
      <Checklist />
      <OrderStatus />
      <Scorer />
      <Skills />
      <Button />
      <Button />
      <Canvas />
      <PackingList />
      <DrinkList />
      <People />
      <AddArray />
      <Tea />
      <InsertArray />
      <Gallery />
    </Wrapper>
  );
}

export default App;
