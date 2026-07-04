'use client'

import React, {useState} from "react";
import Image from "next/image";
import Link from 'next/link';
import homeIcon from '@/assets/icons/homeButton.png';

interface Props {
    setFileOnView: (fileOnView: boolean) => void;
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
}

export const Header: React.FC<Props> = ({setFileOnView, isSidebarOpen, onToggleSidebar}) => {

    const [selectedButton, setSelectedButton] = useState<'file' | 'tools' | null>(null);

    return (
        <header className='nav_bar'>
            <div className='bar_container'>
                <Link href="/">
                    <Image src={homeIcon} alt="homeIcon" width={0} height={0}/>
                </Link>
                <button
                    className={selectedButton === 'file' ? 'bar_button selected' : 'bar_button'}
                    onClick={() => {

                        if (selectedButton === 'file') {
                            setSelectedButton(null);
                            setFileOnView(false);
                        } else {
                            setSelectedButton('file');
                            setFileOnView(true);
                        }
                    }}
                >
                    File
                </button>

                <button
                    type="button"
                    className="sidebar-toggle"
                    onClick={onToggleSidebar}
                    aria-expanded={isSidebarOpen}
                    aria-controls="side-bar"
                >
                    Tools {isSidebarOpen ? '▴' : '▾'}
                </button>
            </div>
        </header>
    )
}