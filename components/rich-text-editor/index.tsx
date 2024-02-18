import React from 'react'
import { FieldValues, Path, SetFieldValue } from 'react-hook-form'
import { rem } from '@mantine/core'
import { Link, RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap'
import {
	ImageSquare,
	Link as LinkIcon,
	LinkBreak,
	ListBullets,
	ListNumbers,
	Quotes,
	TextAlignCenter,
	TextAlignJustify,
	TextAlignLeft,
	TextAlignRight,
	TextBolder,
	TextH,
	TextItalic,
	TextStrikethrough,
	TextUnderline,
} from '@phosphor-icons/react'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { Content, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Label } from '@/components'

interface RichTextEditorProps<T extends FieldValues> {
	content: Content
	label?: string
	minHeight?: number
	name: Path<T>
	placeholder?: string
	setValue: SetFieldValue<T>
}

const IconTextH = () => <TextH size={20} />
const IconTextBolder = () => <TextBolder size={20} />
const IconTextItalic = () => <TextItalic size={20} />
const IconTextUnderline = () => <TextUnderline size={20} />
const IconTextStrikethrough = () => <TextStrikethrough size={20} />
const IconTextAlignLeft = () => <TextAlignLeft size={20} />
const IconTextAlignCenter = () => <TextAlignCenter size={20} />
const IconTextAlignRight = () => <TextAlignRight size={20} />
const IconTextAlignJustify = () => <TextAlignJustify size={20} />
const IconListNumbers = () => <ListNumbers size={20} />
const IconListBullets = () => <ListBullets size={20} />
const IconQuotes = () => <Quotes size={20} />
const IconLink = () => <LinkIcon size={20} />
const IconLinkBreak = () => <LinkBreak size={20} />
const IconImage = () => <ImageSquare size={20} weight="fill" />

const RichTextEditor = <T extends FieldValues>({
	content,
	label,
	minHeight = 120,
	name,
	placeholder = '',
	setValue,
}: RichTextEditorProps<T>) => {
	const editor = useEditor({
		content,
		extensions: [
			StarterKit,
			Underline,
			Link,
			Image,
			TextAlign.configure({ types: ['heading', 'paragraph'] }),
			Placeholder.configure({ placeholder }),
		],
		onUpdate(props) {
			const content = props.editor.getHTML()
			setValue(name, content)
		},
	})

	return (
		<div>
			{label && <Label text={label} />}
			<MantineRichTextEditor
				editor={editor}
				spellCheck={false}
				styles={{
					content: {
						minHeight: rem(minHeight),
					},
				}}
			>
				<MantineRichTextEditor.Toolbar stickyOffset={60} sticky>
					<MantineRichTextEditor.ControlsGroup>
						<MantineRichTextEditor.H2 icon={IconTextH} />
						<MantineRichTextEditor.Bold icon={IconTextBolder} />
						<MantineRichTextEditor.Italic icon={IconTextItalic} />
						<MantineRichTextEditor.Underline icon={IconTextUnderline} />
						<MantineRichTextEditor.Strikethrough icon={IconTextStrikethrough} />
						<MantineRichTextEditor.AlignLeft icon={IconTextAlignLeft} />
						<MantineRichTextEditor.AlignCenter icon={IconTextAlignCenter} />
						<MantineRichTextEditor.AlignRight icon={IconTextAlignRight} />
						<MantineRichTextEditor.AlignJustify icon={IconTextAlignJustify} />
						<MantineRichTextEditor.OrderedList icon={IconListNumbers} />
						<MantineRichTextEditor.BulletList icon={IconListBullets} />
						<MantineRichTextEditor.Blockquote icon={IconQuotes} />
						<MantineRichTextEditor.Link icon={IconLink} />
						<MantineRichTextEditor.Unlink icon={IconLinkBreak} />
						<MantineRichTextEditor.Control>
							<IconImage />
						</MantineRichTextEditor.Control>
					</MantineRichTextEditor.ControlsGroup>
				</MantineRichTextEditor.Toolbar>
				<MantineRichTextEditor.Content />
			</MantineRichTextEditor>
		</div>
	)
}

export default RichTextEditor
