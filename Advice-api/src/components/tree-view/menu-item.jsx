import { useState } from "react";
import {FaMinus, Faminus, FaPlus} from 'react-icons/fa'

export default function MenuItem({item}) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

    return (
        <li>
            <div className="menu-item">
                <p>{item.label}</p>
                {item && item.children && item.children.length ? (
                    <span onClick={() => handleToggleChildren(item.label)}>
                        {
                            displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
                        }
                    </span>
                ):null}
            </div>

            {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
                <MenuList list={item.children} />
            ):null}
        </li>
    )
}