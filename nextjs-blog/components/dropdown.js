import { Menu } from '@headlessui/react'
import Link from 'next/link';


export default function MyDropdown() {

  return (
    <Menu>
        
      <Menu.Button as="a">More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
              <Link href="/shop/classes">
            <a
              className={`${active && 'bg-blue-500'}`}
            >
              Classes
            </a></Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
              <Link href="/shop/shop">
            <a
              className={`${active && 'bg-blue-500'}`}

            >
              Shop
            </a></Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}