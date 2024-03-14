
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export function NavbarComponent() {
  return (
    <Navbar fluid rounded className='h-16 w-full '>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://scontent.fpnh18-3.fna.fbcdn.net/v/t39.30808-1/275216246_113430311280733_8833369966904594095_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHzG1U-uAxjCCCYMw0-_T6p3e4c-80TSOHd7hz7zRNI4TlH7qpRVCXmHo50YRCIw3lXj4UFxKX7GIgYZqZAPdZ-&_nc_ohc=FrDklIe2QnAAX8Bn5Uk&_nc_ht=scontent.fpnh18-3.fna&oh=00_AfANd4NI_CSXGPmBvdLUPB976DpjpQ1DH1jzGkuGiNGeYg&oe=65F79A37" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mom Makara</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
