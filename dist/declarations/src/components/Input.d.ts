/** @jsx jsx */
import { jsx } from '@emotion/react';
import { AutosizeInputProps } from 'react-input-autosize';
import { CommonPropsAndClassName, CSSObjectWithLabel, GroupBase, OptionBase } from '../types';
export interface InputSpecificProps<Option extends OptionBase = OptionBase, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> extends CommonPropsAndClassName<Option, IsMulti, Group> {
    /** Reference to the internal element */
    innerRef?: (instance: HTMLInputElement | null) => void;
    /** Set whether the input should be visible. Does not affect input size. */
    isHidden: boolean;
    /** Whether the input is disabled */
    isDisabled?: boolean;
    /** The ID of the form that the input belongs to */
    form?: string;
    /** The input is rendered in the menu */
    searchInMenu?: boolean;
    /** The menu is placed either at the top or at the bottom */
    menuPlacement?: string;
}
export declare type InputProps<Option extends OptionBase = OptionBase, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> = InputSpecificProps<Option, IsMulti, Group> & Omit<AutosizeInputProps, 'ref'>;
export declare const inputCSS: <Option extends OptionBase, IsMulti extends boolean, Group extends GroupBase<Option>>({ isDisabled, searchInMenu, menuPlacement, theme: { spacing, colors }, }: InputProps<Option, IsMulti, Group>) => CSSObjectWithLabel;
declare const Input: <Option extends OptionBase, IsMulti extends boolean, Group extends GroupBase<Option>>(props: InputProps<Option, IsMulti, Group>) => jsx.JSX.Element;
export default Input;
