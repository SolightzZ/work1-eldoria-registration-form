import { useState, useRef, type DragEvent } from 'react'
import { Upload, FileText, X, CheckCircle2, Image as ImageIcon } from 'lucide-react'
import type { ChangeHandler } from '../../types/form'
import { ErrorMessage } from './ErrorMessage'

type Props = {
  name: string
  file: File | null
  onChange: ChangeHandler
  accept?: string
  error?: string
  hint?: string
}

export function FileUpload({
  name,
  file,
  onChange,
  accept = '.jpg,.jpeg,.png,.pdf',
  error,
  hint = 'JPG, PNG, PDF (สูงสุด 5MB)',
}: Props) {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      const fakeEvent = {
        target: { name, type: 'file', files: [droppedFile] },
      } as unknown as React.ChangeEvent<HTMLInputElement>
      onChange(fakeEvent)
    }
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (inputRef.current) inputRef.current.value = ''
    const fakeEvent = {
      target: { name, type: 'file', files: null },
    } as unknown as React.ChangeEvent<HTMLInputElement>
    onChange(fakeEvent)
  }

  const formattedSize = file
    ? file.size > 1024 * 1024
      ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      : `${(file.size / 1024).toFixed(1)} KB`
    : ''

  const isImage = file && file.type.startsWith('image/')

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={[
          'group relative flex items-center gap-3.5 cursor-pointer rounded-xl border-2 border-dashed p-4 transition-colors select-none',
          error
            ? 'border-rose-300 bg-rose-50/40'
            : isDragging
              ? 'border-sky-600 bg-sky-50'
              : file
                ? 'border-sky-300 bg-sky-50/40'
                : 'border-slate-300 bg-slate-50/50 hover:border-slate-400 hover:bg-white',
        ].join(' ')}
      >
        <div
          className={[
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors',
            file
              ? 'bg-sky-600 text-white'
              : isDragging
                ? 'bg-sky-700 text-white'
                : 'bg-white text-slate-500 border border-slate-200 group-hover:border-slate-300 group-hover:text-slate-700',
          ].join(' ')}
        >
          {isImage ? (
            <ImageIcon className="h-5 w-5" />
          ) : file ? (
            <FileText className="h-5 w-5" />
          ) : (
            <Upload className="h-5 w-5" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
              {file ? file.name : 'Choose file or drag here'}
            </p>
            {file && (
              <span className="inline-flex items-center gap-1 rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-semibold text-sky-800">
                <CheckCircle2 className="h-3 w-3 text-sky-600" />
                Attached
              </span>
            )}
          </div>
          <p className="mt-0.5 text-[11px] text-slate-500">
            {file ? formattedSize : hint}
          </p>
        </div>

        {file && (
          <button
            type="button"
            onClick={handleRemove}
            title="Remove file"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-100 hover:text-rose-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <input
          ref={inputRef}
          type="file"
          name={name}
          accept={accept}
          onChange={onChange}
          className="sr-only"
        />
      </div>

      {error && <ErrorMessage message={error} />}
    </div>
  )
}