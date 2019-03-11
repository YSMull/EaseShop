package com.ysmull.easemall.biz

import org.springframework.web.multipart.MultipartFile

import javax.servlet.http.HttpServletResponse
import java.io.IOException

/**
 * @author maoyusu
 */
interface PicService {

    /**
     * 保存上传的图片
     *
     * @param pic 图片
     * @return 图片UUID
     * @throws IOException
     */
    @Throws(IOException::class)
    fun savePic(pic: MultipartFile): String

    /**
     * 下载图片
     *
     * @param uuid 图片id
     * @param res  HttpServletResponse
     * @throws Exception
     */
    @Throws(Exception::class)
    fun getPic(uuid: String, res: HttpServletResponse)
}
