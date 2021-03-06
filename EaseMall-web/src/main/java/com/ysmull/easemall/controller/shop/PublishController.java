package com.ysmull.easemall.controller.shop;

import com.ysmull.easemall.annotation.Privilege;
import com.ysmull.easemall.biz.PicService;
import com.ysmull.easemall.biz.PublishService;
import com.ysmull.easemall.model.entity.Goods;
import com.ysmull.easemall.model.entity.User;
import com.ysmull.easemall.model.vo.WebResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @author maoyusu
 */
@RestController
@RequestMapping("/api")
public class PublishController {

    @Autowired
    PublishService publishService;

    @Autowired
    PicService picService;

    /**
     * tips: 这里的Goods直接从formData中解析
     */
    @PostMapping("/publish/new")
    @Privilege(role = User.ROLE.SELLER)
    @ResponseBody
    WebResponse<Goods> publishNew(@RequestParam("file") MultipartFile pic, Goods goods) throws IOException {
        WebResponse<Goods> webResponse = new WebResponse<>();
        String picId = picService.savePic(pic);
        Goods newGoods = publishService.publishNew(goods, picId);
        webResponse.setData(newGoods);
        return webResponse;
    }

    @PostMapping("/publish/save")
    @Privilege(role = User.ROLE.SELLER)
    @ResponseBody
    WebResponse<Goods> publishSave(@RequestParam("file") MultipartFile pic, Goods goods) throws IOException {
        WebResponse<Goods> webResponse = new WebResponse<>();
        String picId = picService.savePic(pic);
        Goods newGoods = publishService.publishSave(goods, picId);
        webResponse.setData(newGoods);
        return webResponse;
    }


}
