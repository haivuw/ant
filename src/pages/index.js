import { Button, DatePicker, Switch } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import AddIcon from 'icons/AddIcon';

export default function Home() {
  const handleChange = (val) => {
    console.log(val);
  };

  return (
    <main className="p-10">
      <div className="text-red-500">Hello</div>
      <Button className="h-7 p-2 flex items-center rounded-md">
        <span>
          <AddIcon />
        </span>
        Add check
      </Button>

      <Button className="h-7 p-2 flex items-center rounded-md">
        11 checked
        <Switch size="small" />
      </Button>
    </main>
  );
}
