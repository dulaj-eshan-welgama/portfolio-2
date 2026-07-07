import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const FILE_NAME = 'Dulaj Eshan - Software-Engineer.pdf'

export async function GET() {
  try {
    const publicPath = join(process.cwd(), 'public', FILE_NAME)
    const fileBuffer = await readFile(publicPath)

    return new Response(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${FILE_NAME}"`,
      },
    })
  } catch (err) {
    console.error('CV download error:', err)
    return new Response(null, {
      status: 302,
      headers: { Location: `/${FILE_NAME}` },
    })
  }
}
